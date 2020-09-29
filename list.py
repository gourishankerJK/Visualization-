n = int(input("Enter :"))
l=[]
for i in range(n):
    l.append(int(input("Enter the number:")))
for element in l[:] :
    if element > 3 :
        l.remove(element)
print(l)


n = int(input("Enter :"))
l=[]
for i in range(n):
    l.append(int(input("Enter the number:")))
sum = 0
for i in range(len(l)):
    sum +=l[i]
    if i == 4 :
        break
print(sum)
