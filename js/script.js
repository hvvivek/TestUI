window.onload = addListeners;
var prevX;
var prevY;

function addListeners()
{
    document.getElementById('draggable-pane').addEventListener('mousedown', mouseDown, false);
    window.addEventListener('mouseup', mouseUp, false);
}

function mouseUp()
{
    window.removeEventListener('mousemove', divMove, true);
}

function mouseDown(e)
{
    window.addEventListener('mousemove', divMove, true);
    prevX = e.clientX;
    prevY = e.clientY;
}

function divMove(e)
{
    var div = document.getElementById('draggable-pane');
    div.style.position = 'absolute';
    var pos = -1;

    var topStr = div.style.top;
    var topInt = 0;
    pos = topStr.search('px');
    if( pos > 0 )
    {
        topInt = parseInt( topStr.replace('px','') );
        div.style.top = topInt + (e.clientY - prevY) + 'px';
        prevY = e.clientY;
    }
    else
    {
        div.style.top =  100 + (e.clientY - prevY) + 'px';
    }

    var leftStr = div.style.left;
    var leftInt = 0;
    pos = -1;
    pos = leftStr.search('px');
    if( pos>0 )
    {
        leftInt = parseInt(leftStr.replace('px',''));
        div.style.left =  leftInt + (e.clientX - prevX) + 'px';
        prevX = e.clientX;
    }
    else
    {
        div.style.left =  100 + (e.clientX - prevX) + 'px';
    }
}