var error1 = /RuntimeError: Can not locate element specified by selector "#gb>DIV>DIV>A"/g;
var error2 = /RuntimeError: element INPUT specified by ID:Email was not found/g;
var error3 = /RuntimeError: Can not locate element specified by selector "#accept"/g;
var error4 = /RuntimeError: element INPUT specified by ID:password was not found/g;
var error5  = /RuntimeError: unhandled confirmEx dialog detected. Dialog message: "A script on this page may be busy, or it may have stopped responding. You can stop the script now, open the script in the debugger, or let the script continue/g;
var error6 = /RuntimeError: Can not locate element specified by selector "#edit-account-list"/g;
var error7 = /RuntimeError: element INPUT specified by ID:identifierId was not found/g;
var error8 = /RuntimeError: Can not locate element specified by selector "#passwordNext>DIV>BUTTON"/g;
var error9 = /RuntimeError: Can not locate element specified by selector "#view_container>DIV>DIV>DIV/g;
var error10 = /RuntimeError: element INPUT specified by NAME:password was not found/g;
var error11 = /RuntimeError: element IMG specified by ID:captcha-img was not found/g;
var error12 = /RuntimeError: unhandled confirmEx dialog detected. Dialog message: "This page is asking you to confirm that you want to leave - data you have entered may not be saved."/g;
var error13  = /RuntimeError: Element A is not visible/g;
var error14 = /NS_ERROR_FILE_NOT_FOUND: Component returned failure code/g;
var error15 = /RuntimeError: Can not locate element specified by selector "#ok"/g;
var error16 = /RuntimeError: Can not locate element specified by selector "#signout"/g;
var reconnect = /Reconnect/g;
var gpu = /Cannot connect to GPU backend/g;

function keepRun(){
    for(j=1; j<=56; j++){
        if(error15.test(iimGetErrorText(iimPlay("colab/keep")))){
            iimPlayCode("WAIT SECONDS=15");
            var cek = iimGetErrorText(iimPlayCode("EVENT TYPE=CLICK SELECTOR=\"#gb>DIV>DIV>A\" BUTTON=0"));
            if(error1.test(cek)){
                iimPlayCode("WAIT SECONDS=15");
            };
        }
    }
}

keepRun();