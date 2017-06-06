window.onload = addListeners;

// Global Variables
var prevX;
var prevY;
var handler;

// Code for Draggable Pane
function addListeners()
{
    document.getElementById('segmentation-draggable-pane').addEventListener('mousedown', mouseDown, false);
    document.getElementById('examination-draggable-pane').addEventListener('mousedown', mouseDown, false);
    window.addEventListener('mouseup', mouseUp, false);
}

function mouseUp()
{
    window.removeEventListener('mousemove', handler, true);
}

function mouseDown(e)
{
    var div = this;
    handler = function( e )
                    {
                        divMove(e, div)
                    };
    window.addEventListener('mousemove', handler, true);
    prevX = e.clientX;
    prevY = e.clientY;
}

function divMove(e, div)
{
    e.preventDefault();
    // var div = document.getElementById('segmentation-draggable-pane');
    div.style.position = 'absolute';
    var pos = -1;

    var topStr = div.style.top;
    var topInt = 0;
    pos = topStr.search('px');
    console.log(div.style.top);
    
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

    console.log(div.style.top);

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

// Code for Brush
function onClickBrush()
{
    var div = document.getElementById('segmentation-draggable-pane');
    div.style.visibility = 'visible';
}

// Code for Region Growing
function onClickRegionGrow()
{
    var div = document.getElementById('segmentation-draggable-pane');
    div.style.visibility = 'visible';
}

// Code for 2D Incision
function onClickIncision()
{
    var div = document.getElementById('examination-draggable-pane');
    console.log(div);
    div.style.visibility = 'visible';
}

// Code for Segmentation Tab Click
function onClickSegmentationTab()
{
    dismissExaminationDraggablePane();
}

//Code for Approve Segmentation
function approveSegmentation()
{
    $('#side-pane-tabs a[href="#surgery"]').tab('show')
    dismissSegmentationDraggablePane();
}

// Code to dismiss segmentation Draggable Pane
function dismissSegmentationDraggablePane()
{
    var div = document.getElementById('segmentation-draggable-pane');
    div.style.visibility = 'hidden';
}

// Code to dismiss examination Draggable Pane
function dismissExaminationDraggablePane()
{
    var div = document.getElementById('examination-draggable-pane');
    div.style.visibility = 'hidden';
}
