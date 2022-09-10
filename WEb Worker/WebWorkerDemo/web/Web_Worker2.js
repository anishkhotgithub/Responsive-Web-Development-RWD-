var count=0;

function count_time(){
    count++;
    postMessage(count);
    setTimeout("count_time()",1000);
}

count_time();