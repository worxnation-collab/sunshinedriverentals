
from xhtml2pdf import pisa
import json
import sys
from datetime import datetime

def generate_pdf(agreement_data, output_path):
    # Basic HTML template for the rental agreement
    html_content = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Rental Agreement</title>
        <style>
            body {{ font-family: sans-serif; margin: 40px; }}
            h1 {{ color: #333; text-align: center; }}
            .section {{ margin-bottom: 20px; border-bottom: 1px solid #eee; padding-bottom: 10px; }}
            .section-title {{ font-weight: bold; margin-bottom: 10px; color: #555; }}
            .field {{ margin-bottom: 5px; }}
            .field-label {{ font-weight: bold; display: inline-block; width: 150px; }}
            .signature-box {{ border: 1px solid #ccc; padding: 20px; margin-top: 30px; text-align: center; }}
            .signature-line {{ border-top: 1px solid #333; margin-top: 50px; width: 80%; margin-left: auto; margin-right: auto; }}
        </style>
    </head>
    <body>
        <h1>SunshineDrive Rental Agreement</h1>
        <div class="section">
            <div class="section-title">Renter Details</div>
            <div class="field"><span class="field-label">Name:</span> {agreement_data.get('renterName', '')}</div>
            <div class="field"><span class="field-label">Email:</span> {agreement_data.get('email', '')}</div>
            <div class="field"><span class="field-label">Phone:</span> {agreement_data.get('phone', '')}</div>
            <div class="field"><span class="field-label">Driver's License:</span> {agreement_data.get('driversLicense', '')} ({agreement_data.get('licenseStateCountry', '')})</div>
            <div class="field"><span class="field-label">Date of Birth:</span> {agreement_data.get('dateOfBirth', '')}</div>
            <div class="field"><span class="field-label">Address:</span> {agreement_data.get('address', '')}, {agreement_data.get('cityStateZip', '')}</div>
            <div class="field"><span class="field-label">Flight Number:</span> {agreement_data.get('flightNumber', 'N/A')}</div>
        </div>

        <div class="section">
            <div class="section-title">Vehicle Details</div>
            <div class="field"><span class="field-label">Vehicle:</span> {agreement_data.get('vehicleYearMakeModel', '')}</div>
            <div class="field"><span class="field-label">Color:</span> {agreement_data.get('color', '')}</div>
            <div class="field"><span class="field-label">VIN:</span> {agreement_data.get('vin', '')}</div>
            <div class="field"><span class="field-label">License Plate:</span> {agreement_data.get('licensePlate', '')}</div>
        </div>

        <div class="section">
            <div class="section-title">Pickup & Return</div>
            <div class="field"><span class="field-label">Pickup:</span> {agreement_data.get('pickupDate', '')} {agreement_data.get('pickupTime', '')} at {agreement_data.get('pickupLocation', '')}</div>
            <div class="field"><span class="field-label">Return:</span> {agreement_data.get('returnDate', '')} {agreement_data.get('returnTime', '')} at {agreement_data.get('returnLocation', '')}</div>
            <div class="field"><span class="field-label">Odometer Out:</span> {agreement_data.get('odometerOut', '')}</div>
            <div class="field"><span class="field-label">Fuel Out:</span> {agreement_data.get('fuelOut', '')}</div>
        </div>

        <div class="section">
            <div class="section-title">Pricing</div>
            <div class="field"><span class="field-label">Daily Rate:</span> {agreement_data.get('dailyRate', '')}</div>
            <div class="field"><span class="field-label">Total Days:</span> {agreement_data.get('totalDays', '')}</div>
            <div class="field"><span class="field-label">Subtotal:</span> {agreement_data.get('subtotal', '')}</div>
            <div class="field"><span class="field-label">Tax:</span> {agreement_data.get('tax', '')}</div>
            <div class="field"><span class="field-label">Discount:</span> {agreement_data.get('discountApplied', 'N/A')}</div>
            <div class="field"><span class="field-label">Total Charged:</span> {agreement_data.get('totalCharged', '')}</div>
            <div class="field"><span class="field-label">Security Deposit:</span> {agreement_data.get('securityDepositHold', '')}</div>
            <div class="field"><span class="field-label">Stripe Receipt ID:</span> {agreement_data.get('stripeReceiptId', 'N/A')}</div>
        </div>

        <div class="section">
            <div class="section-title">Additional Driver</div>
            <div class="field"><span class="field-label">Name:</span> {agreement_data.get('additionalDriverName', 'N/A')}</div>
            <div class="field"><span class="field-label">Date of Birth:</span> {agreement_data.get('additionalDriverDob', 'N/A')}</div>
            <div class="field"><span class="field-label">License:</span> {agreement_data.get('additionalDriverLicense', 'N/A')} ({agreement_data.get('additionalDriverLicenseStateCountry', 'N/A')})</div>
            <div class="field"><span class="field-label">Phone:</span> {agreement_data.get('additionalDriverPhone', 'N/A')}</div>
            <div class="field"><span class="field-label">Relationship:</span> {agreement_data.get('additionalDriverRelationship', 'N/A')}</div>
        </div>

        <div class="signature-box">
            <p>Renter Signature: {agreement_data.get('renterSignatureText', '')}</p>
            <div class="signature-line"></div>
            <p>Date: {datetime.fromisoformat(agreement_data['signedAt'].replace('Z', '+00:00')).strftime('%Y-%m-%d %H:%M:%S') if 'signedAt' in agreement_data else ''}</p>
        </div>

    </body>
    </html>
    """

    with open(output_path, "w+b") as result_file:
        pisa_status = pisa.CreatePDF(html_content, dest=result_file)
    return not pisa_status.err

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python generate_agreement_pdf.py <json_agreement_data> <output_path>")
        sys.exit(1)

    agreement_json = sys.argv[1]
    output_file = sys.argv[2]

    try:
        agreement_data = json.loads(agreement_json)
        if generate_pdf(agreement_data, output_file):
            print(f"PDF generated successfully at {output_file}")
        else:
            print("Error generating PDF")
    except Exception as e:
        print(f"An error occurred: {e}")
        sys.exit(1)
