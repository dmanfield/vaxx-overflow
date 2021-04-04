from django.shortcuts import render
from django.conf import settings              
from django.http import HttpResponse
from twilio.rest import Client


def broadcast_sms(request):
    message_to_broadcast = ("What up bro? Have you been vaxx'd yet?")
    client = Client(settings.TWILIO_ACCOUNT_SID, settings.TWILIO_AUTH_TOKEN) 
    # SMS_BROADCAST_TO_NUMBERS will change based on query results -> should only be one number because it will send to the person at the top of the query 
    number = ["+16306666273"]
    for recipient in number:
        if recipient:
            client.messages.create(to=recipient,
                                   from_=settings.TWILIO_NUMBER,
                                   body=message_to_broadcast)
    return HttpResponse("messages sent!", 200)
