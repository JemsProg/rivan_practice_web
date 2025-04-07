# contact/views.py

import json
import traceback
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import send_mail
from django.utils.html import strip_tags

@csrf_exempt  # For development only. Use proper CSRF protection in production!
def contact_view(request):
    """
    Handle POST requests from the contact form and send an email with both plain text and HTML content.

    Expected JSON payload:
    {
        "name": "User Name",
        "email": "user@example.com",
        "message": "User's message here..."
    }
    """
    # Ensure the request method is POST
    if request.method != 'POST':
        return JsonResponse({'error': 'Invalid request method.'}, status=400)
    
    try:
        # Parse the JSON data from the request body
        data = json.loads(request.body)
        name = data.get('name')
        email = data.get('email')
        message = data.get('message')

        # Basic validation to ensure all fields are provided
        if not name or not email or not message:
            return JsonResponse({'status': 'error', 'error': 'All fields are required.'}, status=400)

        # Create a subject for the email
        subject = f"Rivan Message: {name}"

        # Construct the HTML message with inline CSS for a better design
        html_message = f"""
        <html>
          <head>
            <style>
              body {{
                font-family: 'Arial', sans-serif;
                background-color: #f9f9f9;
                margin: 0;
                padding: 20px;
              }}
              .container {{
                background-color: #ffffff;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
              }}
              .header {{
                font-size: 22px;
                font-weight: bold;
                color: #0D2153;
                margin-bottom: 15px;
              }}
              .content {{
                font-size: 16px;
                color: #333333;
                line-height: 1.5;
              }}
              .footer {{
                margin-top: 20px;
                font-size: 14px;
                color: #777777;
              }}
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">New Message from {name}</div>
              <div class="content">
                <p>{message}</p>
                <p><strong>Contact Email:</strong> {email}</p>
              </div>
              <div class="footer">
                This email was sent via the Rivan contact form.
              </div>
            </div>
          </body>
        </html>
        """
        # Create a plain text version by stripping HTML tags
        plain_message = strip_tags(html_message)

        # Send the email using Django's send_mail function
        send_mail(
            subject,                            # Email subject
            plain_message,                      # Plain text content
            'leighest2021@gmail.com',           # Sender (must match EMAIL_HOST_USER in settings.py)
            ['leighter1998@gmail.com'],         # Recipient(s)
            fail_silently=False,
            html_message=html_message           # HTML content for better design
        )

        # Return a success response
        return JsonResponse({'status': 'success'})
    
    except Exception as e:
        # Print the full traceback to the console for debugging
        traceback.print_exc()
        return JsonResponse({'status': 'error', 'error': str(e)}, status=500)
