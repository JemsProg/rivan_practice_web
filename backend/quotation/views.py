import xmlrpc.client
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
import json

# ── Odoo connection details ───────────────────────────────────────────────────
ODOO_URL = 'https://rivanit.odoo.com'      # no trailing slash
ODOO_DB = 'rivanit'
ODOO_USERNAME = 'rivaninstitute@gmail.com'
ODOO_PASSWORD = 'C1sc0123$$'

# Authenticate once at module load
common = xmlrpc.client.ServerProxy(f"{ODOO_URL}/xmlrpc/2/common")
uid = common.authenticate(ODOO_DB, ODOO_USERNAME, ODOO_PASSWORD, {})
models = xmlrpc.client.ServerProxy(f"{ODOO_URL}/xmlrpc/2/object")


def get_terms(course_name: str) -> str:
    """Return the T&C text block for a given course."""
    if course_name == "RivanIT CCNA Network Engineer Training 200-301":
        return """

  Terms & Conditions:

Inclusive:

I. Inclusive in the course fee are the Courseware, Certificate of Achievement, and Free Review for Exam
 
II. If you need to refresh the particular course, he/she attended, we undertake to provide a suitable re-course for you on the same training program “unlimited within the period of one year”. The participant need only bring along the courseware issued to him/her for that training program.

III. A minimum of FIVE (5) participants to commence a class.

IV. Each participant will receive a Rivan-Shirt once they passed the CCNA 200-301 Certification (for CCNA).


Rivan Technological Institute Inc. reserves the right to cancel a class as needed.

Classes are from 9:00 am to 5:00 PM.

 

Payment:

30 days payment term.

Participants will not be able to get their Certificate of Completion until full payment is made.

Mode of payment: 

Bank Transfer: RIVANCYBER TRAINING INSTITUTE INC

BDO Acct. No: 008008007082

Gcash: 09778464888 (Robert Ivan Victor)

Paypal: rivaninstitute@gmail.com

 

Venue:

The training shall be held at RivanCyber Training Institute, 18D Calle Mola, Lapaz Makati 1601 Makati, Philippines.,

"""
    elif course_name == "CCNP Enterprise: ENCORxENARSIxSDWAN":
        return """

Terms & Conditions:

Inclusive:
I. Inclusive in the course fee are the Courseware, Certificate of Achievement, and Free Review for Exam
(1 YR unlimited) and Meals (Breakfast, Lunch, and Afternoon Snacks).
 
II. If you need to refresh the particular course, he/she attended, we undertake to provide a suitable re-course for you on the same training program “unlimited within the period of one year”. The participant need only bring along the courseware issued to him/her for that training program.
 
III. A minimum of eight (5) participants to commence a class.

IV. Each participant will receive a Rivan-Shirt once they passed the CCNP Certification .
Rivan Technological Institute Inc. reserves the right to cancel a class as needed.
Classes are from 9:00 am to 5:00 PM.
 
Payment:
30 days payment term.
Participants will not be able to get their Certificate of Completion until full payment is made.

Mode of payment: 
Bank Transfer: RIVANCYBER TRAINING INSTITUTE INC
BDO Acct. No: 008008007082
Gcash: 09778464888 (Robert Ivan Victor)
Paypal: rivaninstitute@gmail.com 
 
Venue:
The training shall be held at RivanCyber Training Institute, 18D Calle Mola, Lapaz Makati 1601 Makati, Philippines.,
 
I hereby certify that I have read and fully understood the foregoing and the policy on terms & conditions. I further undertake to obey all the rules and regulations of Rivan School of Technology Inc. and acknowledge that any infraction or misrepresentation on my part gives Rivan Technological Institute Inc. the right to institute an action against me before the appropriate court and/or administrative Tribunal.

"""
    elif course_name == "COMPTIA SECURITY PLUS+":
        return """

Terms & Conditions:

Inclusive:

I. Inclusive in the course fee are the Courseware, Certificate of Achievement, and Free Review for Exam

II. If you need to refresh the particular course he/she attended, we undertake to provide a suitable re-course for you on the same training program "unlimited within the period of one year". The participant need only bring along the courseware issued to him/her for that training program.

III. A minimum of eight (8) participants to commence a class.

IV. Each participant will receive a Rivan-Shirt once they passed the COMPTIA Certification.

Rivan Technological Institute Inc. reserves the right to cancel a class as needed.

Classes are from 9:00 am to 5:00 PM.

Payment:

30 days payment term.

Participants will not be able to get their Certificate of Completion until full payment is made.

Mode of payment:

Bank Transfer: RIVANCYBER TRAINING INSTITUTE INC.
BDO Acct. No: 008008007082
Gcash: 09778464888 (Robert Ivan Victor)
Paypal: rivaninstitute@gmail.com

Venue:

The training shall be held at RivanCyber Training Institute, 18D Calle Mola, Lopez Makati 1601 Makati, Philippines.
I hereby certify that I have read and fully understood the foregoing and the policy on terms & conditions. I further undertake to obey all the rules and regulations of Rivan School of Technology Inc. and acknowledge that any infraction or misrepresentation on my part gives Rivan Technological Institute Inc. the right to institute an action against me before the appropriate court and/or administrative Tribunal.

"""
    return ""  # fallback


def create_odoo_customer(name: str, email: str, phone: str) -> int:
    """Get or create an Odoo partner (customer) and return its ID."""
    existing = models.execute_kw(
        ODOO_DB, uid, ODOO_PASSWORD, 'res.partner', 'search_read',
        [[['name', '=', name]]], {'fields': ['id'], 'limit': 1}
    )
    if existing:
        return existing[0]['id']

    return models.execute_kw(
        ODOO_DB, uid, ODOO_PASSWORD, 'res.partner', 'create',
        [{'name': name, 'email': email, 'phone': phone, 'customer_rank': 1}]
    )


def create_odoo_product(name: str) -> int:
    """Get or create a service product and return its ID."""
    existing = models.execute_kw(
        ODOO_DB, uid, ODOO_PASSWORD, 'product.product', 'search_read',
        [[['name', '=', name]]], {'fields': ['id'], 'limit': 1}
    )
    if existing:
        return existing[0]['id']

    return models.execute_kw(
        ODOO_DB, uid, ODOO_PASSWORD, 'product.product', 'create',
        [{'name': name, 'type': 'service'}]
    )


def create_odoo_quotation(customer_id: int, product_id: int,
                          data: dict, attendee_names: list) -> int:
    """Create a sale.order in Odoo, including a note-line, product line, and T&C."""
    num_attendees = int(data.get('numberOfAttendees', 1))
    names = ", ".join(attendee_names) if attendee_names else "N/A"

    # This will go into the "Add a note" line
    line_description = (
        f"Training Location: {data.get('trainingLocation')}\n"
        f"Delivery Mode: {data.get('deliveryMode')}\n"
        f"Attendees: {num_attendees}\n"
        f"Funding: {data.get('fundingType')}\n"
        f"Voucher Needed: {data.get('voucherNeeded')}\n"
        f"Job Title: {data.get('jobTitle')}\n"
        f"Email: {data.get('email')}\n"
        f"Contact: {data.get('contactNumber')}\n"
        f"Message: {data.get('message')}\n"
        f"Attendee Names: {names}"
    )

    # This will go into the bottom "Terms and conditions..." box
    terms_raw = get_terms(data.get('course', ''))
    terms_html = "<br/>".join(terms_raw.splitlines())

    # Build two order lines: a note_line, then the real product line
    order_lines = [
        # 1) greyed-out note line
        (0, 0, {
            'product_id': product_id,
            'product_uom_qty': num_attendees,
        }),
        (0, 0, {
            'display_type': 'line_note',
            'name': line_description,
        }),
        # 2) actual product line
    ]

    return models.execute_kw(
        ODOO_DB, uid, ODOO_PASSWORD, 'sale.order', 'create',
        [{
            'partner_id': customer_id,
            'order_line': order_lines,
            'note': terms_html,
        }]
    )


@csrf_exempt
def quotation_quote(request):
    if request.method != "POST":
        return JsonResponse({"error": "Invalid request method"}, status=405)

    try:
        data = json.loads(request.body)
        cust_id = create_odoo_customer(
            data.get("customerName"),
            data.get("email"),
            data.get("contactNumber")
        )
        prod_id = create_odoo_product(data.get("course"))
        quote_id = create_odoo_quotation(
            cust_id, prod_id, data, data.get("attendeeNames", [])
        )
        return JsonResponse({
            "message": f"✅ Quotation {quote_id} created successfully in Odoo!"
        })
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=400)
