#def hellofunc(greeting, name='you'):
#    return (f"Greeting yang diberikan adalah{greeting}", 
#            f"Nama yang diberikan adalah{name}")
#print(hellofunc('hi', name='devangga'))
#def studentinfo(*args,**kwargs):
#    print(args)
#    print(kwargs)
#course = ['Math', 'art','biology']
#info = {'name':'John','age':22}
#studentinfo(course,info)



month_day = [0, 31, 28, 31, 30,31, 31,30,31,30,31]

def is_leap(year):
  return year %4 == 0 and (year % 100 != 0 or year % 400 == 0)

def days_in_month(year, month):
  if not 1 <= month <=12:
    return 'invalid month'
  if month ==2 and is_leap(year):
    return 29

  return month_day[month]
