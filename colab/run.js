///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//VARIABEL HEAD
var version = "8970419";
var source = "users.csv";
var coloumn = 5;
var folderDownload = "C:\\Users\\Administrator\\Downloads\\FirefoxPortable\\Data\\profile\\iMacros";
var urlDownload = "https://raw.githubusercontent.com/wildannss/clb/main";
var urlSubDownload = "colab";
var counted = parseInt(window.prompt("Use number only"));
var serviceCap = "http://imacros2.2captcha.com";
//VARIABEL ERROR
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
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//SET VARIABEL HEAD
function head(){
    iimSet("version",version);
    iimSet("source",source);
    iimSet("coloumn",coloumn);
    iimSet("folderDownload",folderDownload);
    iimSet("urlDownload",urlDownload);
    iimSet("urlSubDownload",urlSubDownload);
    iimSet("serviceCap",serviceCap);
    iimSet("counted",counted);
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//KEEP RUNNING
function keepRun(){
    for(j=1; j<=28; j++){
        if(error15.test(iimGetErrorText(iimPlay("colab/keep")))){
            iimPlayCode("WAIT SECONDS=60");
        }
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//LOGOUT
function logout(){
    if(error16.test(iimGetErrorText(iimPlay("colab/logout")))){
        if(error15.test(iimPlay("colab/logout_f"))){
            iimPlay("colab/logout_new")
        }
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//RUNNING CODE
for(b=1; b<=3; b++){
    var itung = parseInt(counted+b);
    //UPDATE DATASOURCE
    head();
    iimSet("loop",itung);
    var run0 = iimGetErrorText(iimPlay("colab/data"));
    //JIKA ADA WARNING STAY PAGE
    if(error12.test(run0)){
        head();
        iimSet("loop",itung);
        iimPlay("colab/logout_f");
    }
    /////////////UPDATE SCRIPT/////////////
    head();
    iimSet("loop",itung);
    iimPlay("colab/update");
    ///////////////////////////////////////

    //LOGIN
    head();
    iimSet("loop",itung);
    var run1 = iimGetErrorText(iimPlay("colab/login"));
    //JIKA BELUM LOGOUT
    switch(true){
    case error1.test(run1):
        logout();
        continue;
    //LOGIN NORMAL DEL USER
    case error2.test(run1):
        head();
        iimSet("loop",itung);
        var run2 = iimGetErrorText(iimPlay("colab/login_del"));
        //LOGIN NEW DEL USER
        switch(true){
        case error6.test(run2):
            head();
            iimSet("loop",itung);
            var run3 = iimGetErrorText(iimPlay("colab/login_del_new"));
            //LOGIN NEW
            switch(true){
            case error9.test(run3):
                head();
                iimSet("loop",itung);
                var run4 = iimGetErrorText(iimPlay("colab/login_new"));
                ////////////////
                ////CAPTCHA////
                switch(true){
                case error10.test(run4):
                    head();
                    iimSet("loop",itung);
                    var run_y = iimGetErrorText(iimPlay("colab/captcha_new"));
                    //JIKA SUDAH PERNAH LOGIN
                    switch(true){
                    case error3.test(run_y):
                        logout();
                        continue;
                    case error15.test(run_y):
                        keepRun();
                        continue;
                    }
                    continue;
                //JIKA SUDAH PERNAH LOGIN
                case error3.test(run4):
                    logout();
                    continue;
                /////////////////
                case error15.test(run4):
                    keepRun();
                    continue;
                }
                continue;
            ////////////////
            ////CAPTCHA////
            case error10.test(run3):
                head();
                iimSet("loop",itung);
                var run_z = iimGetErrorText(iimPlay("colab/captcha_new"));
                //JIKA SUDAH PERNAH LOGIN
                switch(true){
                case error3.test(run_z):
                    logout();
                    continue;
                case error15.test(run_z):
                    keepRun();
                    continue;
                continue;
            //JIKA SUDAH PERNAH LOGIN
            case error3.test(run3):
                logout();
                continue;
            /////////////////
            case error15.test(run3):
                keepRun();
                continue;
            }
            continue;
        ////////////////
        ////CAPTCHA////
        case error4.test(run2):
            head();
            iimSet("loop",itung);
            var run_w = iimGetErrorText(iimPlay("colab/captcha"));
            //JIKA SUDAH PERNAH LOGIN
            switch(true){
            case error3.test(run_w):
                logout();
                continue;
            case error15.test(run_w):
                keepRun();
                continue;
            }
            continue;
        }
        //JIKA SUDAH PERNAH LOGIN
        case error3.test(run2):
            logout();
            continue;
        case error15.test(run2):
            keepRun();
            continue;
        }
        /////////////////
        continue;
    ////CAPTCHA////
    case error4.test(run1):
        head();
        iimSet("loop",itung);
        var run_x = iimGetErrorText(iimPlay("colab/captcha"));
        //JIKA SUDAH PERNAH LOGIN
        switch(true){
        case error3.test(run_x):
            logout();
            continue;
        /////////////////
        case error15.test(run_x):
            keepRun();
            continue;
        }
        continue;
    //JIKA SUDAH PERNAH LOGIN
    case error3.test(run1):
        logout();
        b--;
        continue;
    case error15.test(run1):
        keepRun();
        continue;
    }
}