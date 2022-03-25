// level {1/2/3}


//LEVEL 1

var i, j, k,l;
for(i=1; i<=5; i++)
{
  for(l=5; l>=i; l--)
  {
   document.write('&nbsp');
  }
  
 for(j=1; j<=i; j++)
  document.write(j);
 for(k=i-1; k>=1; k--)
  document.write(k);
 document.write("<br>");
}