import datetime
today = datetime.date.today()
date = datetime.date(today.year, 9, 13)

if today == date:
    print("Feliz Dia do Programador!")
else:
    print("Todo dia é dia do progamador!")
