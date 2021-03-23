var c1 = 0;
var c2 = 0;
var i1 = 2;
var i2 =2;
function inp1()
{
	
	var ip1 = document.getElementById("ip1");
	
	if(i1%2==0)
	{
		c1 = 1;
	}
	else
	{
		c1= 0;
	}
	i1++;
}

function inp2()
{
	
	var ip2 = document.getElementById("ip2");
	
	if(i2%2==0)
	{
		c2 = 1;
	}
	else
	{
		c2= 0;
	}
	i2++;
}

function gate()
{
		var ip3 =document.getElementById("ip3");
		if(c1==1&&c2==1)
		{
			ip3.style.backgroundColor = 'rgb(45,255,45)';
			ip3.style.boxShadow = '0 0 20px rgba(45,255,45),0 0 20px rgba(45,255,45)';
		}
		else{
			ip3.style.backgroundColor = 'black';	
		}
}
