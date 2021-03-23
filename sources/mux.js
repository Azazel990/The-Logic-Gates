var c1 = 0;
var c2 = 0;
var i1 = 2;
var i2 =2;


function slone()
{
	var s1 = document.getElementById("s1");
	if(i1%2==0)
	{
		
		c1 = 1;

	}
	else
	{
	
		c1 = 0;
	}
	i1++;	
}

function sline2()
{
	var s2 = document.getElementById("s2");
	if(i2%2==0)
	{
		
		c2 = 1;

	}
	else
	{
		
		c2 = 0;
	}
	i2++;	
}

function gate()
{
		var ip1 = document.getElementById("ip1");
		var ip2 = document.getElementById("ip2");
		var ip4 = document.getElementById("ip4");
		var ip5 = document.getElementById("ip5");
		var ip3 =document.getElementById("ip3");
		if(c1==0&&c2==0)
		{
			ip1.style.backgroundColor = 'rgb(255,53,53)';
			ip1.style.boxShadow = '0 0 20px rgba(255,53,53),0 0 20px rgba(255,53,53)';
			ip2.style.backgroundColor = 'black';
			ip3.style.backgroundColor = 'rgb(255,53,53)';
			ip3.style.boxShadow = '0 0 20px rgba(255,53,53),0 0 20px rgba(255,53,53)';
			ip4.style.backgroundColor = 'black';
			ip5.style.backgroundColor = 'black';
			
		}

		else if(c1==0&&c2==1)
		{
			ip1.style.backgroundColor = 'black';
			ip2.style.backgroundColor = 'blue';
			ip3.style.backgroundColor = 'blue';
			ip4.style.backgroundColor = 'black';
			ip5.style.backgroundColor = 'black';		
		}
		 else if(c1==1&&c2==0)
		{
			ip1.style.backgroundColor = 'black';
			ip2.style.backgroundColor = 'black';
			ip3.style.backgroundColor = 'rgb(140,26,255)';
			ip4.style.backgroundColor = 'rgb(140,26,255)';
			ip5.style.backgroundColor = 'black';
		}
		 else if(c1==1&&c2==1)
		{	
			ip1.style.backgroundColor = 'black';
			ip2.style.backgroundColor = 'black';
			ip3.style.backgroundColor = 'yellow';
			ip4.style.backgroundColor = 'black';
			ip5.style.backgroundColor = 'yellow';
		}
		
}
