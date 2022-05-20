// const api = 'http://172.168.25.25:9080/solar/';
// console.log(api);


const mac = '0A:EB:33:DD:62:DB';
const ip = '172.168.25.29';

const json = [{"id":834,"jsonrpc":"2.0","result":[0,{"board_name":"tplink,archer-c7-v5","hostname":"WiFi-Beneden","release":{"distribution":"OpenWrt","revision":"r11364-ef56c85848","version":"19.07.8","target":"ath79\/generic","description":"OpenWrt 19.07.8 r11364-ef56c85848"},"model":"TP-Link Archer C7 v5","kernel":"4.14.241","system":"Qualcomm Atheros QCA956X ver 1 rev 0"}]},{"id":835,"jsonrpc":"2.0","result":[0,{"memory":{"total":127496192,"shared":274432,"free":80318464,"cached":8474624,"available":61661184,"buffered":2838528},"uptime":63102,"localtime":1652983687,"load":[38560,11904,4128],"swap":{"free":0,"total":0}}]},{"id":836,"jsonrpc":"2.0","result":[0,{"data":"local pcall, dofile, _G = pcall, dofile, _G\n\nmodule \"luci.version\"\n\nif pcall(dofile, \"\/etc\/openwrt_release\") and _G.DISTRIB_DESCRIPTION then\n\tdistname    = \"\"\n\tdistversion = _G.DISTRIB_DESCRIPTION\n\tif _G.DISTRIB_REVISION then\n\t\tdistrevision = _G.DISTRIB_REVISION\n\t\tif not distversion:find(distrevision,1,true) then\n\t\t\tdistversion = distversion .. \" \" .. distrevision\n\t\tend\n\tend\nelse\n\tdistname    = \"OpenWrt\"\n\tdistversion = \"Development Snapshot\"\nend\n\nluciname    = \"LuCI openwrt-19.07 branch\"\nluciversion = \"git-21.189.23240-7b931da\"\n"}]},{"id":837,"jsonrpc":"2.0","result":[0,{"memory":{"total":127496192,"shared":274432,"free":80334848,"cached":8474624,"available":61677568,"buffered":2838528},"uptime":63102,"localtime":1652983687,"load":[38560,11904,4128],"swap":{"free":0,"total":0}}]},{"id":838,"jsonrpc":"2.0","result":[0,{"data":"118\n"}]},{"id":839,"jsonrpc":"2.0","result":[0,{"data":"16384\n"}]},{"id":840,"jsonrpc":"2.0","result":[0,{"dhcp6_leases":[],"dhcp_leases":[]}]},{"id":841,"jsonrpc":"2.0","result":[0,[]]},{"id":842,"jsonrpc":"2.0","result":[0,{"results":[{"authenticated":true,"thr":0,"wme":true,"preamble":"long","mesh peer PS":"","mesh plid":0,"signal_avg":85,"mac":"54:13:79:48:87:89","noise":-101,"mesh llid":0,"connected_time":39821,"rx":{"bytes":25684574,"mhz":20,"vht":false,"ht":false,"packets":159510,"drop_misc":26717,"rate":6000},"mesh local PS":"","tx":{"bytes":30587902,"mhz":40,"ht":false,"retries":4389,"rate":162000,"mcs":4,"vht":true,"packets":154207,"nss":2,"failed":5204,"short_gi":false},"inactive":40,"authorized":true,"mesh non-peer PS":"","mesh plink":"","tdls":false,"mfp":false,"signal":27},{"authenticated":true,"thr":0,"wme":true,"preamble":"long","mesh peer PS":"","mesh plid":0,"signal_avg":14,"mac":"20:DF:B9:6A:1F:E5","noise":-101,"mesh llid":0,"connected_time":4567,"rx":{"bytes":3100629,"mhz":80,"ht":false,"drop_misc":110,"rate":390000,"mcs":9,"vht":true,"packets":30243,"nss":1,"short_gi":false},"mesh local PS":"","tx":{"bytes":5112181,"mhz":80,"ht":false,"retries":2428,"rate":390000,"mcs":8,"vht":true,"packets":26182,"nss":1,"failed":423,"short_gi":true},"inactive":0,"authorized":true,"mesh non-peer PS":"","mesh plink":"","tdls":false,"mfp":false,"signal":33},{"authenticated":true,"thr":0,"wme":true,"preamble":"long","mesh peer PS":"","mesh plid":0,"signal_avg":17,"mac":"0A:EB:33:DD:62:DB","noise":-101,"mesh llid":0,"connected_time":74,"rx":{"bytes":375231,"mhz":20,"vht":false,"ht":false,"packets":1572,"drop_misc":2,"rate":6000},"mesh local PS":"","tx":{"bytes":423074,"mhz":80,"ht":false,"retries":29,"rate":650000,"mcs":7,"vht":true,"packets":1348,"nss":2,"failed":0,"short_gi":true},"inactive":1810,"authorized":true,"mesh non-peer PS":"","mesh plink":"","tdls":false,"mfp":false,"signal":42}]}]},{"id":843,"jsonrpc":"2.0","result":[0,{"results":[{"authenticated":true,"thr":4500,"wme":true,"preamble":"short","mesh peer PS":"","mesh plid":0,"signal_avg":-62,"mac":"D0:73:D5:41:1B:3E","noise":-95,"mesh llid":0,"connected_time":63066,"rx":{"bytes":5731080,"mhz":20,"vht":false,"ht":false,"packets":155519,"drop_misc":518,"rate":2000},"mesh local PS":"","tx":{"bytes":6047824,"mhz":20,"ht":true,"retries":8129,"rate":6500,"mcs":0,"vht":false,"packets":37152,"40mhz":false,"failed":391,"short_gi":false},"inactive":7460,"authorized":true,"mesh non-peer PS":"","mesh plink":"","tdls":false,"mfp":false,"signal":-64},{"authenticated":true,"thr":9093,"wme":true,"preamble":"short","mesh peer PS":"","mesh plid":0,"signal_avg":-49,"mac":"90:E2:02:C5:B2:8D","noise":-95,"mesh llid":0,"connected_time":63049,"rx":{"bytes":90750650,"mhz":20,"ht":true,"drop_misc":5874,"rate":65000,"mcs":7,"vht":false,"packets":132415,"40mhz":false,"short_gi":false},"mesh local PS":"","tx":{"bytes":3659728,"mhz":20,"ht":true,"retries":5817,"rate":14400,"mcs":1,"vht":false,"packets":20639,"40mhz":false,"failed":0,"short_gi":true},"inactive":49500,"authorized":true,"mesh non-peer PS":"","mesh plink":"","tdls":false,"mfp":false,"signal":-50},{"authenticated":true,"thr":27375,"wme":true,"preamble":"short","mesh peer PS":"","mesh plid":0,"signal_avg":-52,"mac":"34:15:13:BA:04:62","noise":-95,"mesh llid":0,"connected_time":63043,"rx":{"bytes":3341761,"mhz":20,"ht":true,"drop_misc":58,"rate":72200,"mcs":7,"vht":false,"packets":27048,"40mhz":false,"short_gi":true},"mesh local PS":"","tx":{"bytes":2828995,"mhz":20,"ht":true,"retries":2598,"rate":52000,"mcs":5,"vht":false,"packets":14586,"40mhz":false,"failed":0,"short_gi":false},"inactive":210,"authorized":true,"mesh non-peer PS":"","mesh plink":"","tdls":false,"mfp":false,"signal":-54},{"authenticated":true,"thr":2250,"wme":true,"preamble":"short","mesh peer PS":"","mesh plid":0,"signal_avg":-70,"mac":"D0:37:45:CE:C3:3C","noise":-95,"mesh llid":0,"connected_time":63038,"rx":{"bytes":92666,"mhz":20,"vht":false,"ht":false,"packets":2589,"drop_misc":182,"rate":1000},"mesh local PS":"","tx":{"bytes":53063,"mhz":20,"ht":true,"retries":698,"rate":6500,"mcs":0,"vht":false,"packets":289,"40mhz":false,"failed":34,"short_gi":false},"inactive":24450,"authorized":true,"mesh non-peer PS":"","mesh plink":"","tdls":false,"mfp":false,"signal":-69},{"authenticated":true,"thr":15937,"wme":true,"preamble":"short","mesh peer PS":"","mesh plid":0,"signal_avg":-70,"mac":"80:91:33:F3:85:64","noise":-95,"mesh llid":0,"connected_time":63037,"rx":{"bytes":292375,"mhz":20,"vht":false,"ht":false,"packets":4289,"drop_misc":23,"rate":1000},"mesh local PS":"","tx":{"bytes":220576,"mhz":20,"ht":true,"retries":1794,"rate":58500,"mcs":6,"vht":false,"packets":2227,"40mhz":false,"failed":2,"short_gi":false},"inactive":14470,"authorized":true,"mesh non-peer PS":"","mesh plink":"","tdls":false,"mfp":false,"signal":-70},{"authenticated":true,"thr":31968,"wme":true,"preamble":"short","mesh peer PS":"","mesh plid":0,"signal_avg":-52,"mac":"C4:29:96:06:0F:86","noise":-95,"mesh llid":0,"connected_time":63036,"rx":{"bytes":46702436,"mhz":20,"ht":true,"drop_misc":72,"rate":58500,"mcs":6,"vht":false,"packets":205783,"40mhz":false,"short_gi":false},"mesh local PS":"","tx":{"bytes":11349267,"mhz":20,"ht":true,"retries":16465,"rate":65000,"mcs":6,"vht":false,"packets":47804,"40mhz":false,"failed":1,"short_gi":true},"inactive":2120,"authorized":true,"mesh non-peer PS":"","mesh plink":"","tdls":false,"mfp":false,"signal":-54},{"authenticated":true,"thr":25125,"wme":true,"preamble":"short","mesh peer PS":"","mesh plid":0,"signal_avg":-66,"mac":"D4:6A:6A:AC:73:01","noise":-95,"mesh llid":0,"connected_time":63032,"rx":{"bytes":16709003,"mhz":20,"ht":true,"drop_misc":0,"rate":58500,"mcs":6,"vht":false,"packets":52828,"40mhz":false,"short_gi":false},"mesh local PS":"","tx":{"bytes":4160019,"mhz":20,"ht":true,"retries":7932,"rate":43300,"mcs":4,"vht":false,"packets":16525,"40mhz":false,"failed":52,"short_gi":true},"inactive":240,"authorized":true,"mesh non-peer PS":"","mesh plink":"","tdls":false,"mfp":false,"signal":-68},{"authenticated":true,"thr":27375,"wme":true,"preamble":"short","mesh peer PS":"","mesh plid":0,"signal_avg":-64,"mac":"04:03:D6:08:6F:93","noise":-95,"mesh llid":0,"connected_time":62683,"rx":{"bytes":468273,"mhz":20,"vht":false,"ht":false,"packets":3032,"drop_misc":3,"rate":24000},"mesh local PS":"","tx":{"bytes":2464784,"mhz":20,"ht":true,"retries":724,"rate":52000,"mcs":5,"vht":false,"packets":2515,"40mhz":false,"failed":9,"short_gi":false},"inactive":18740,"authorized":true,"mesh non-peer PS":"","mesh plink":"","tdls":false,"mfp":false,"signal":-66},{"authenticated":true,"thr":31968,"wme":true,"preamble":"short","mesh peer PS":"","mesh plid":0,"signal_avg":-46,"mac":"74:C6:3B:9F:97:96","noise":-95,"mesh llid":0,"connected_time":3759,"rx":{"bytes":5327746,"mhz":20,"vht":false,"ht":false,"packets":16979,"drop_misc":12,"rate":1000},"mesh local PS":"","tx":{"bytes":4736984,"mhz":20,"ht":true,"retries":1419,"rate":65000,"mcs":6,"vht":false,"packets":18141,"40mhz":false,"failed":0,"short_gi":true},"inactive":130,"authorized":true,"mesh non-peer PS":"","mesh plink":"","tdls":false,"mfp":false,"signal":-45},{"authenticated":true,"thr":13687,"wme":true,"preamble":"short","mesh peer PS":"","mesh plid":0,"signal_avg":-63,"mac":"64:D1:A3:28:4C:40","noise":-95,"mesh llid":0,"connected_time":1645,"rx":{"bytes":4038852,"mhz":20,"ht":true,"drop_misc":12227,"rate":26000,"mcs":3,"vht":false,"packets":14538,"40mhz":false,"short_gi":false},"mesh local PS":"","tx":{"bytes":627519,"mhz":20,"ht":true,"retries":1079,"rate":19500,"mcs":2,"vht":false,"packets":1375,"40mhz":false,"failed":2,"short_gi":false},"inactive":730,"authorized":true,"mesh non-peer PS":"","mesh plink":"","tdls":false,"mfp":false,"signal":-66}]}]}];

console.log(json);