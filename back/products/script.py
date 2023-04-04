import json
from products.models import Product

with open('data_v2.json') as f:
    data = json.load(f)

for item in data:
    data = Product(Product_id=item['Product_id'], 
        Model_id=item['Model_id'],
        Barcode=item['Barcode'],
        Brand=item['Brand'],
        Name=item['Name'],
        Product_code=item['Product_code'],
        Sku=item['Sku'],
        Cost_no_vat=item['Cost_no_vat'],
        Selling_price=item['Selling_price'],
        Street_price=item['Street_price'],
        Description=item['Description'],
        Weight=item['Weight'],
        Picture_1=item['Picture_1'],
        Picture_2=item['Picture_2'],
        Picture_3=item['Picture_3'],
        Picture_4=item['Picture_4'],
        Made_in=item['Made_in'],
        Shoes_heel=item['Shoes_heel'],
        Category=item['Category'],
        Subcategory=item['Subcategory'],
        Season=item['Season'],
        Color=item['Color'],
        Bicolors=item['Bicolors'],
        Gender=item['Gender'],
        Size=item['Size'],
        Quantity=item['Quantity'],
    )
    data.save()
