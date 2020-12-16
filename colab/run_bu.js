///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//VARIABEL HEAD
var version = "8970419";
var source = "users.csv";
var coloumn = 5;
var akun = parseInt(window.prompt("What VPS counted?\n\np.s: just number"));
var x = akun;
//VARIABEL ERROR
var error1 = /RuntimeError: Can not locate element specified by selector "#gb>DIV>DIV>A"/g;
var error9 = /RuntimeError: Can not locate element specified by selector "#view_container/g;
var error6 = /RuntimeError: Can not locate element specified by selector "#edit-account-list"/g;
var error2 = /RuntimeError: element INPUT specified by ID:Email was not found/g;
var error7 = /RuntimeError: element INPUT specified by ID:identifierId was not found/g;
var error4 = /RuntimeError: element INPUT specified by ID:password was not found/g;
var error10 = /RuntimeError: element INPUT specified by NAME:password was not found/g;
//error8 NOT USED
var error8 = /RuntimeError: Can not locate element specified by selector "#passwordNext>DIV>BUTTON"/g;
var error3 = /RuntimeError: Can not locate element specified by selector "#accept"/g;
var error5  = /RuntimeError: unhandled confirmEx dialog detected. Dialog message: "A script on this page may be busy, or it may have stopped responding. You can stop the script now, open the script in the debugger, or let the script continue/g;
var error12 = /RuntimeError: unhandled confirmEx dialog detected. Dialog message: "This page is asking you to confirm that you want to leave - data you have entered may not be saved."/g;
//error11 NOT USED
var error11 = /RuntimeError: element IMG specified by ID:captcha-img was not found/g;
var error13  = /RuntimeError: Element A is not visible/g;
//error14 NOT USED
var error14 = /NS_ERROR_FILE_NOT_FOUND: Component returned failure code/g;
var error15 = /RuntimeError: Can not locate element specified by selector "#ok"/g;
var reconnect = /Reconnect/g;
//gpu NOT USED
var gpu = /Cannot connect to GPU backend/g;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//SET VARIABEL HEAD
function head(){
    iimSet("version",version);
    iimSet("source",source);
    iimSet("coloumn",coloumn);
    iimSet("akun",akun);
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//LOGOUT
function logout(i,x){
    //LOGOUT
    x = akun + i
    iimSet("loop",x);
    var log = iimGetErrorText(iimPlay("colab/logout"));
    if(error12.test(log)){
        x = akun + i
        iimSet("loop",x);
        iimPlay("colab/logout_f");
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//RUNNING CODE
function runningCode(i,x){
    //RUNNING CODE
    head();
    x = akun + i
    iimSet("loop",x);
    iimPlay('colab/run_code');
    for(r=1; r<=10; r++){
        //KEEP CONNECTED
        head();
        x = akun + i
        iimSet("loop",x);
        var reconn = iimGetErrorText(iimPlayCode('colab/keep'));
        //JIKA ADA WARN GPU
        if(error15.test(reconn)){
            iimPlayCode("WAIT SECONDS=180");
        }
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//LOOPING MONTHLY
// for(a=1; a<=1; a++){
    // UPDATE SOURCE DATA
    // head();
    // iimSet("loop",a);
    // iimPlay("colab/data");
    var dat = iimGetErrorText(iimPlay("colab/data"));
    if(error12.test(dat)){
            head();
            iimSet("loop",a);
            logout(i,x);
    }
    
    //LOOPING DAILY
    for(i=1; i<=1; i++){
        // iimPlay("colab/data");
        //// UPDATE ALL SCRIPT EXCEPT JS
        // head();
        // x = akun + i
        // iimSet("loop",x);
        // iimPlay("colab/update");

        //NORMAL FORM BARU
        head();
        x = akun + i
        iimSet("loop",x);
        var run = iimGetErrorText(iimPlay("colab/login_new"));

        //JIKA BELUM LOGOUT
        if(error1.test(run)){
            head();
            x = akun + i
            iimSet("loop",x);
            logout(i,x);
            i--;

        //JIKA TIDAK ADA ENTRY EMAIL DI FORM BARU
        }else if(error7.test(run)){
            //FORM BARU DEL USER
            head();
            x = akun + i
            iimSet("loop",x);
            var run2 = iimGetErrorText(iimPlay("colab/login_del_new"));
            //JIKA SUDAH DIPAKAI
            if(error3.test(run2)){
                head();
                x = akun + i
                iimSet("loop",x);
                logout(i,x);
            //FORM LAMA
            }else if(error9.test(run2)){
                head();
                x = akun + i
                iimSet("loop",x);
                var run3 = iimGetErrorText(iimPlay("colab/login_del"));
                if(error6.test(run3)){
                    head();
                    x = akun + i
                    iimSet("loop",x);
                    var run4 = iimGetErrorText(iimPlay("colab/login"));
                    //JIKA ADA CAPTCHA
                    if(error4.test(run4)){
                        head();
                        x = akun + i
                        iimSet("loop",x);
                        var run5 = iimGetErrorText(iimPlay("colab/captcha"));
                        //JIKA SUDAH DIPAKAI
                        if(error3.test(run4)){
                            head();
                            x = akun + i
                            iimSet("loop",x);
                            logout(i,x);
                        }
                        head();
                        x = akun + i
                        iimSet("loop",x);
                        runningCode(i,x);
                        logout(i,x);
                    //JIKA SUDAH DIPAKAI
                    }else if(error3.test(run4)){
                        head();
                        x = akun + i
                        iimSet("loop",x);
                        logout(i,x);
                    }
                    head();
                    x = akun + i
                    iimSet("loop",x);
                    runningCode(i,x);
                    logout(i,x);
                }else if(error4.test(run3)){
                    //JIKA ADA CAPTCHA
                    head();
                    x = akun + i
                    iimSet("loop",x);
                    var run6 = iimGetErrorText(iimPlay("colab/captcha"));
                    //JIKA SUDAH DIPAKAI
                    if(error3.test(run6)){
                        head();
                        x = akun + i
                        iimSet("loop",x);
                        logout(i,x);
                    }
                    head();
                    x = akun + i
                    iimSet("loop",x);
                    runningCode(i,x);
                    logout(i,x);
                //JIKA SUDAH DIPAKAI
                }else if(error3.test(run3)){
                    head();
                    x = akun + i
                    iimSet("loop",x);
                    logout(i,x);
                }
                head();
                x = akun + i
                iimSet("loop",x);
                runningCode(i,x);
                logout(i,x);
            }
            head();
            x = akun + i
            iimSet("loop",x);
            runningCode(i,x);
            logout(i,x);

        //JIKA SUDAH DIPAKAI
        }else if(error3.test(run)){
            head();
            x = akun + i
            iimSet("loop",x);
            logout(i,x);
        
        //JIKA ADA CAPTCHA
        }else if(error10.test(run)){
            head();
            x = akun + i
            iimSet("loop",x);
            var run7 = iimGetErrorText(iimPlay("colab/captcha"));
            //JIKA SUDAH DIPAKAI
            if(error3.test(run7)){
                head();
                x = akun + i
                iimSet("loop",x);
                logout(i,x)
            }
            head();
            x = akun + i
            iimSet("loop",x);
            runningCode(i,x);
            logout(i,x);
        
        //JIKA NOT RESPONDING
        }else if(error5.test(run)){
            head();
            x = akun + i
            iimSet("loop",x);
            logout(i,x);
            i--;
        
        //JIKA ELEMEN BUTTON TIDAK DITEMUKAN
        }else if(error13.test(run)){
            head();
            x = akun + i
           iimSet("loop",x);
            logout(i,x);
            i--;
        
        }
        head();
        x = akun + i
        iimSet("loop",x);
        runningCode(i,x);
        logout(i,x);
    }

// }