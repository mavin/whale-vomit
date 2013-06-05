#! /usr/bin/env python
import xlrd
import markdown2
from collections import OrderedDict
import simplejson as json

########## TODO
# arguement parsing
# setting root dir to project
# getting file name and using that throughout
# dynamic column name -> python properties -> json translation
## walk the first row, 


# Open the workbook and select the first worksheet
wb = xlrd.open_workbook('topics.xls')
sh = wb.sheet_by_index(0) 

# List to hold dictionaries
ele_list =[] 

# Iterate through each row in worksheet and fetch values into dict
for rownum in range(1, sh.nrows):
    topic = OrderedDict()
    row_values = sh.row_values(rownum)
    topic['name']= row_values[0]
    topic['title']= row_values[1]
    topic['description']= markdown2.markdown(row_values[2])
    ele_list.append(topic) 


# Serialize the list of dicts to JSON
j = json.dumps(ele_list) 

# Write to file
with open('topics.json','w') as f:
	f.write(j)
