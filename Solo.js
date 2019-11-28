function encript (mensaje)
{
    let abc1 = ['a','b','c','d','e','f','g','h','i'];
    let abc2 = ['r','s','t','u','v','w','x','y','z'];
    let abc3 = ['j','k','l','m','n','ñ','o','p','q'];

    let c = [];
    let d = [];

    let j = 0, i;

    for (i=0;i<=abc3.length-1;i++){
        abc3[j]=abc3[i];
        j++;
    }

    for (i=0;i<=abc3.length-2;i++){
        e=abc3[i];
        abc3[i]=abc3[i+1];
        abc3[i+1]=e;
        i++;
    }

    for (i=0;i<=abc2.length-2;i++){
        e=abc2[i];
        abc2[i]=abc2[i+1];
        abc2[i+1]=e;
        i++;
    }


    for (i=0;i<=abc1.length-2;i++){
        e=abc1[i];
        abc1[i]=abc1[i+1];
        abc1[i+1]=e;
        i++;
    }


    console.log(abc1);
    console.log(abc2);
    console.log(abc3);

    abc = abc1 + "," + abc2 +","+ abc3;

    for (i=0;i<mensaje.length;i++)
    {
        console.log(mensaje[i]);
    }

    console.log(abc);
    let sol = [];
    let p1, p2, p3,p;

    for (i=0;i<mensaje.length;i++)
    {
        p = mensaje[i];
        p = p.toLowerCase();

        p1 = abc1.indexOf(p);
        p2 = abc2.indexOf(p);
        p3 = abc3.indexOf(p);

        if (p1 != -1) sol[i] = abc2[p1];
        else if (p2 != -1) sol[i] = abc3[p2];
        else if (p3 != -1)sol[i] = abc1[p3];
        else sol[i] = " ";
    }

    console.log(sol.toString());
}

let resol = ['L','o','s',' ','G','u','n','g','a','n',' ','s','o','n',' ','m','e','j','o','r','e','s',' ','q','u','e',' ','n','o','s','o','t','r','o','s'];

encript(resol);