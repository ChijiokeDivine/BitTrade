from django import template
import cryptocompare
import threading

register = template.Library()

def fetch_price_async(value, callback):
    try:
        price_data = cryptocompare.get_price(value, currency='USD')
        if value in price_data and 'USD' in price_data[value]:
            callback(price_data[value]['USD'])
    except Exception as e:
        # Handle any exceptions here, e.g., log the error.
        callback(None)

@register.filter
def fetch_price(value):
    result = [None]

    def callback(data):
        result[0] = data

    # Create a thread to fetch the price asynchronously
    thread = threading.Thread(target=fetch_price_async, args=(value, callback))
    thread.start()
    thread.join()  # Wait for the thread to finish (you can use a timeout if needed)

    return result[0]
