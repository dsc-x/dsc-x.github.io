import json

with open("src/data/fulllist.json") as infile:
	data = json.load(infile)

newdata = {"dscs": {}}

i = 1
for d in data["dscs"]:
	d["code"] = i
	newdata["dscs"][str(i)] = {}
	newdata["dscs"][str(i)] = d
	i += 1

with open("src/data/codedlist.json", "w") as f:
	json.dump(newdata, f, indent=4)