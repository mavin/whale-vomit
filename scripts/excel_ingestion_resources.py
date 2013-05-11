#! /usr/bin/env python
import xlrd
from collections import OrderedDict
import simplejson as json

########## TODO
# arguement parsing
# setting root dir to project
# getting file name and using that throughout
# dynamic column name -> python properties -> json translation
## walk the first row, 


# Open the workbook and select the first worksheet
wb = xlrd.open_workbook('resources.xls')
sh = wb.sheet_by_index(0) 

# List to hold dictionaries
ele_list =[] 

# Iterate through each row in worksheet and fetch values into dict
for rownum in range(1, sh.nrows):
    resource = OrderedDict()
    row_values = sh.row_values(rownum)
    #resources['category']= row_values[0]
    resource['agencyName']= row_values[1]
    resource['serviceName']= row_values[2]
    resource['phone']= row_values[3]
    resource['address1']= row_values[4]
    resource['address2']= row_values[5]
    resource['city']= row_values[6]
    #resource['state']= row_values[7]
    resource['zip']= row_values[7]
    resource['eligibility']= row_values[8]
    resource['description']= row_values[9]
    #resource['language']= row_values[10]
    resource['agencyWebsite']= row_values[11]
    resource['serviceWebsite']= row_values[12]
    ele_list.append(resource) 


# Serialize the list of dicts to JSON
j = json.dumps(ele_list) 

# Write to file
with open('resources.json','w') as f:
	f.write(j)
