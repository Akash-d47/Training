const palin = (num)
{
    let palin=0;
    let r=0;
    while(num!=10)
    {
        r=num%10;
        palin=(palin*10)+r;
        console.log(palin);
        num=num%10;
    }
    if(palin==num)
    {
        console.log(num, "is a palindrome");
    }
}