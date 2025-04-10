import os
import openpyxl
import xmlrpc.client
from django.core.mail import EmailMessage
from django.shortcuts import render
from django.http import HttpResponse
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
import json

# Odoo connection details
ODOO_URL = 'https://rivanit.odoo.com/'
ODOO_DB = 'rivanit'
ODOO_USERNAME = 'rivaninstitute@gmail.com'
ODOO_PASSWORD = 'C1sc0123$$'

# Authenticate with Odoo
common = xmlrpc.client.ServerProxy(f"{ODOO_URL}/xmlrpc/2/common")
uid = common.authenticate(ODOO_DB, ODOO_USERNAME, ODOO_PASSWORD, {})

models = xmlrpc.client.ServerProxy(f"{ODOO_URL}/xmlrpc/2/object")


def create_odoo_customer(customer_name, email, phone):
    """Create or get a customer in Odoo."""
    customer = models.execute_kw(
        ODOO_DB, uid, ODOO_PASSWORD, 'res.partner', 'search_read',
        [[['name', '=', customer_name]]], {'fields': ['id']}
    )

    if customer:
        print(f"✅ Customer {customer_name} already exists with ID {customer[0]['id']}")
        return customer[0]['id']

    customer_id = models.execute_kw(
        ODOO_DB, uid, ODOO_PASSWORD, 'res.partner', 'create',
        [{'name': customer_name, 'email': email, 'phone': phone, 'customer_rank': 1}]
    )

    print(f"✅ Created new customer {customer_name} with ID {customer_id}")
    return customer_id


def create_odoo_product(course_name):
    """Create or get a product in Odoo."""
    product = models.execute_kw(
        ODOO_DB, uid, ODOO_PASSWORD, 'product.product', 'search_read',
        [[['name', '=', course_name]]], {'fields': ['id']}
    )

    if product:
        print(f"✅ Product {course_name} already exists with ID {product[0]['id']}")
        return product[0]['id']

    product_id = models.execute_kw(
        ODOO_DB, uid, ODOO_PASSWORD, 'product.product', 'create',
        [{'name': course_name, 'type': 'service'}]
    )

    print(f"✅ Created new product {course_name} with ID {product_id}")
    return product_id


def create_odoo_quotation(customer_id, product_id, data, full_names):
    """Create a new quotation in Odoo with attendees' names and quantity multiplied by the number of attendees."""
    num_attendees = int(data['numberOfAttendees'])
    full_names_str = ", ".join(full_names) if full_names else "N/A"

    note = (
        f"📍 Training Location: {data['trainingLocation']}\n"
        f"🎓 Delivery Mode: {data['deliveryMode']}\n"
        f"👥 Number of Attendees: {num_attendees}\n"
        f"💰 Funding: {data['fundingType']}\n"
        f"🎫 Voucher: {data['voucherNeeded']}\n"
        f"👨‍💼 Job Title: {data['jobTitle']}\n"
        f"📧 Email: {data['email']}\n"
        f"📞 Contact Number: {data['contactNumber']}\n"
        f"📝 Message: {data['message']}\n"
        f"👤 Attendee Names: {full_names_str}\n"
    )

    quotation_id = models.execute_kw(
        ODOO_DB, uid, ODOO_PASSWORD, 'sale.order', 'create',
        [{
            'partner_id': customer_id,
            'order_line': [(0, 0, {'product_id': product_id, 'product_uom_qty': num_attendees})],  # Multiply by attendees
            'note': note,
        }]
    )

    print(f"✅ Created new quotation with ID {quotation_id}")
    return quotation_id


@csrf_exempt
def quotation_quote(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)

            customer_name = data.get("customerName")
            email = data.get("email")
            phone = data.get("contactNumber")
            course_name = data.get("course")
            full_names = data.get("attendeeNames")

            customer_id = create_odoo_customer(customer_name, email, phone)
            product_id = create_odoo_product(course_name)

            quotation_id = create_odoo_quotation(customer_id, product_id, data, full_names)

            return JsonResponse({"message": f"✅ Quotation {quotation_id} created successfully in Odoo!"})
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)
    return JsonResponse({"error": "Invalid request method"}, status=405)
