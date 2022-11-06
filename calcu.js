var ans = document.getElementById("Answer")
ans.value=0 
function EnterNumber(num)
{
    if(ans.value==0)
    {
        ans.value=""
    }
    ans.value += num
} 

function EnterClear(){
    document.getElementById("Answer").value = 0
}

function EnterEqual(){
    var val=document.getElementById("Answer").value
    document.getElementById("Answer").value = eval(val)
}