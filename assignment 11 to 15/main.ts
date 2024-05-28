//Assignment no 11
//Names:Store the names of a few of your friends in a array called names.Print each person's name by 
//acessing each element in the list ,one at a time.

let names:string[] = ["Anum", "Esha", "Sana", "Saffi", "Biba"];//defines an array of names 
for (let i = 0;i < names.length; i++) {
    console.log(names[i]) ;
    
}
//Assignment no 12
//Greeting:Start with the array you used in exercise 11,but instead of just printing each person's name,print
//a message to them. The text of each message should be the same but each message should be  personalized 
//with the person's name.

let Names:string[] = ["Hiba", "Aliza", "Kanzul", "Midha", "Laiba"];
for (let i = 0;i < Names.length; i++) {
    console.log(`Hello! ${Names[i]}, How do you do?`) ;
    
}
//Assignment no 13
//Your own array: Think of your favourite mode of transportation, such as car or motorcycle,and make a list
//that stores several examples.Use your list to print a series of statements about these items,such as
//"I would like to own a honda motorcycle".

let transportationMode: string[] = ["car", "bike", "truck", "lorry"];
for (let i = 0;i < transportationMode.length; i++) {
    console.log(`I would like to owm a ${transportationMode[i]}`) ;
    
}
//Assignment no 14
//Guest List: if you could invite anyone,living or deceased,to dinner,who would you invite? Make a list 
//that includes atleast three people you would like to invite to dinner, Then use your list to print a message to 
//each person,inviting them to dinner.
let guestList: string[] = ["Rubab", "Rafia", "Hunaina"];
for (let i = 0; i < guestList.length; i++) {
    console.log(`You are specially invited to dinner today ${guestList[i]}`);
    
}
//Assignment no 15
//ChangingGuestlist: you just heard that one of your guests can't make the dinner, so you need to send
//out a new set of  invitations. You'll have to think of someone else to invite.
//Start with your program from exercise 14, Add a print statement at the end of your program starting the name 
//of the guest who can't make it.
//Modify your list, replacing the name of the guest who can't make it with the name of the new person you are 
//inviting.
//Print a second set of invitation messages, one for each person who is still in your list.

let guestlist: string[] = ["Rubab", "Rafia", "Hunaina"];

//print the name who can't make dinner
let unableAttend:string = guestlist.splice(1,1)[0];
console.log(`${unableAttend} not invited in dinner`);
//push

guestlist.push("Manahil Mughal");
//print a message
guestlist.forEach(guest=> {
    console.log(`Dear ${guest}, you are specially invited to dinner`);
    
    
});

    



