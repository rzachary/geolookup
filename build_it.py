import csv
import json
import string
import re
import collections
from io import StringIO


def builder():
    new_map = dict()
    final_map = dict()

    states = [
        'Alabama',
        'Alaska',
        'American_Samoa',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'Delaware',
        'DC',
        'Florida',
        'Georgia',
        'Guam',
        'Hawaii',
        'Idaho',
        'Illinois',
        'Indiana',
        'Iowa',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Maine',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
        'Nebraska',
        'Nevada',
        'New_Hampshire',
        'New_Jersey',
        'New_Mexico',
        'New_York',
        'North_Carolina',
        'North_Dakota',
        'Northern_Mariana',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Pennsylvania',
        'Puerto_Rico',
        'Rhode_Island',
        'South_Carolina',
        'South_Dakota',
        'Tennessee',
        'Texas',
        'Minor_Islands',
        'Utah',
        'Vermont',
        'US_Virgin_Islands',
        'Virginia',
        'Washington',
        'West_Virginia',
        'Wisconsin',
        'Wyoming',
    ]

    county_list = []
    zip_county = {}

    # build a file that lists US states and territories in order
    # use the number as the id
    states_list = {}
    for x in range(1, len(states)):
        states_list[x] = states[x]

    with open("states.json", "w") as states_out:
        json.dump(states_list, states_out)

    # build a json file that maps states to counties
    # count each unique county relationship and use the order
    # as the id
    for name in states:
        filename = "counties/" + name + "_Counties"
        f = open(filename, "r", encoding="utf-8")
        for county_line in f:
            clsplit = county_line.split(',')
            county_list.append(clsplit[0])
        new_map[name] = county_list
        f.close()

    # build a jason file that maps zip codes to a list of counties and a state
    # use the actual zip code as the id
    with open("zip_codes/uszips.csv", newline='') as csvfile:
        zipreader = csv.DictReader(csvfile, delimiter=',')
        for row in zipreader:
            zip_county[row['zip']] = [row['state_name'] , row['county_name']]

    with open("counties.json", "w") as counties_out:
        json.dump(new_map, counties_out)

    with open("zips.json", "w") as writeout:
        json.dump(zip_county, writeout)

if __name__ == '__main__':
    builder()