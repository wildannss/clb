for(w=1; w<=2; w++){
    iimPlayCode("WAIT SECONDS=1");
    iimPlayCode("EVENT TYPE=CLICK SELECTOR=\"#runtime-menu-button>DIV>DIV>DIV\" BUTTON=0");
    iimPlayCode("WAIT SECONDS=2");
    iimPlayCode("EVENT TYPE=CLICK SELECTOR=\"#\\:1v>DIV\" BUTTON=0");
    iimPlayCode("WAIT SECONDS=5");
    iimPlayCode("EVENT TYPE=CLICK SELECTOR=\"#ok\" BUTTON=0");
    iimPlayCode("WAIT SECONDS=60");
}