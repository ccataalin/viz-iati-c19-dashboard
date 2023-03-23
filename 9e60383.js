(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{331:function(t,e,n){"use strict";n(17),n(78),n(79),n(13),n(33),n(34);var r={name:"DataDownloadButton",components:{},props:["type","filterParams","selectedFilterDimension"],data:function(){return{}},computed:{filePath:function(){return"https://data.humdata.org/dataset/iati-covid19-funding"},isProd:function(){return this.$store.state.isProd}},methods:{downloadAllData:function(){this.$mixpanelTrackLink(this.filePath,"download all data"),window.open(this.filePath)},downloadFilteredData:function(t){var param="*"===this.filterParams[this.selectedFilterDimension]?null:this.filterParams[this.selectedFilterDimension],e=this.selectedFilterDimension.split("#")[1];"flows"===this.type&&e.includes("org")&&(e="org+id");var n="off"!==this.filterParams.humanitarian,r="off"!==this.filterParams.strict,o="flows"===this.type?this.proxyLinkFlows(param,e,n,r):this.proxyLinkTransactions(param,e,n,r);this.$mixpanelTrackLink(o,"download filtered data"),window.open(o)},checkToken:function(t,e,n){if(!e.includes(t))throw new Error("Bad "+n+": "+t+". Expected one of "+String(e))},proxyLinkTransactions:function(t,e,n,r){var o={url:"https://ocha-dap.github.io/hdx-scraper-iati-viz/covid/transactions.csv"};return null!==t&&(this.checkToken(e,["org+id","country","sector"],"selection type"),o.filter01="select",o["select-query01-01"]=e+"="+t),n&&(o.filter02="select",o["select-query02-01"]="indicator+humanitarian=1"),r&&(o.filter03="select",o["select-query03-01"]="indicator+strict=1"),o.filter04="count",o["count-tags04"]="date+month,org+id,org+name,org+type,sector,country,activity+code,x_transaction_type",o["count-header04-01"]="Net money (USD)",o["count-type04-01"]="sum",o["count-pattern04-01"]=o["count-column04-01"]="#value+net",o["count-header04-02"]="Total money (USD)",o["count-type04-02"]="sum",o["count-pattern04-02"]=o["count-column04-02"]="#value+total",o.filter05="select",o["select-query05-01"]="value>0",o.filter06="sort",o["sort-tags06"]="date+month,org+name,x_transaction_type,value+total","https://proxy.hxlstandard.org/data?"+new URLSearchParams(o).toString()},proxyLinkFlows:function(t,e,n){var r={url:"https://ocha-dap.github.io/hdx-scraper-iati-viz/covid/flows.csv"};return null!==t&&(r.filter01="select",r["select-query01-01"]="org+id+reporting="+t),e&&(r.filter02="select",r["select-query02-01"]="indicator+humanitarian=1"),n&&(r.filter03="select",r["select-query03-01"]="indicator+strict=1"),r.filter04="count",r["count-tags04"]="org+id+reporting,org+name+reporting,org+reporting+type,org+id+provider,org+name+provider,org+provider+type,org+id+receiver,org+name+receiver,org+receiver+type,x_transaction_direction",r["count-header04-01"]="Total money (USD)",r["count-type04-01"]="sum",r["count-pattern04-01"]=r["count-column04-01"]="#value+total",r.filter05="select",r["select-query05-01"]="value>0",r.filter06="sort",r["sort-tags06"]="value+total",r["sort-reverse06"]="on","https://proxy.hxlstandard.org/data?"+new URLSearchParams(r).toString()}}},o=n(41),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-dropdown",{staticClass:"download-button",attrs:{id:"downloadDropdown",text:"Download Data",block:"",variant:"outline-dark"},on:{click:function(e){return t.onClick(e)}}},[n("b-dropdown-item",{on:{click:function(e){return t.downloadAllData()}}},[t._v("\n      View data on HDX\n    ")]),t._v(" "),n("b-dropdown-item",{on:{click:function(e){return t.downloadFilteredData()}}},[t._v("\n      View filtered data\n    ")])],1)],1)}),[],!1,null,null,null);e.a=component.exports},340:function(t,e,n){var content=n(358);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("3bd18f02",content,!0,{sourceMap:!1})},341:function(t,e,n){var content=n(360);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("12696822",content,!0,{sourceMap:!1})},342:function(t,e,n){var content=n(362);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("7a369ad4",content,!0,{sourceMap:!1})},343:function(t,e,n){var content=n(364);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("2e107364",content,!0,{sourceMap:!1})},357:function(t,e,n){"use strict";n(340)},358:function(t,e,n){var r=n(39)(!1);r.push([t.i,".doughnut-chart[data-v-79283961]{height:180px;width:180px}",""]),t.exports=r},359:function(t,e,n){"use strict";n(341)},360:function(t,e,n){var r=n(39)(!1);r.push([t.i,'.timeseries-legend{color:#333;display:flex;flex-direction:row-reverse;font-family:"Source Sans Pro","Helvetica Neue",Arial,sans-serif;font-size:12px;justify-content:center;margin-top:5px}.key{display:inline-block;height:10px;width:10px}.key.key-circle{border:1px solid;border-radius:50%}',""]),t.exports=r},361:function(t,e,n){"use strict";n(342)},362:function(t,e,n){var r=n(39)(!1);r.push([t.i,".summary-table{font-size:14px}.summary-table thead{display:none}.summary-table td{padding:0 8px 0 0;vertical-align:middle}.summary-table td:last-child{padding-right:0;text-align:right}.color-key{height:12px;width:12px}.scroll-list-container{position:relative}.scroll-list{height:170px;max-width:273px;overflow-y:scroll}.scroll-list .list-breakdown{color:#888;padding-left:10px}.scroll-list-overlay{background:#fff;background:linear-gradient(180deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.8));bottom:0;height:30px;pointer-events:none;position:absolute;width:100%}.scroll-list-footer{display:flex;font-size:14px;justify-content:space-between}",""]),t.exports=r},363:function(t,e,n){"use strict";n(343)},364:function(t,e,n){var r=n(39)(!1);r.push([t.i,'abbr[data-original-title],abbr[title]{text-decoration:none;cursor:auto}.key-figure-container{border-bottom:1px solid #ccc;display:flex;flex-direction:row;margin-bottom:28px;padding:20px 0}.key-figure-num{font-family:"Gotham Book",sans-serif;font-size:42px;line-height:49px;text-transform:uppercase}@media only screen and (max-width:992px){.iati-viz h2.header .badge.info-icon.badge-pill{width:20px}}',""]),t.exports=r},370:function(t,e,n){"use strict";n.r(e);var r=n(21),o=n(22),l=n(20),c=(n(63),n(333),n(43),n(13),n(42),n(8),n(1),n(355),n(193),n(10),n(191),n(78),n(79),n(74)),d=n.n(c),m=n(335),h=n.n(m),f=n(330),v=n.n(f),y=n(53),C=n(356),_=n.n(C),x=n(344),k={name:"SummaryDoughnutChart",components:{DoughnutChart:{extends:x.b,props:["data","options"],mounted:function(){this.renderChart(this.data,this.options)},watch:{data:function(){this.renderChart(this.data,this.options)}}}},props:["doughnutChartData","colors"],data:function(){return{}},computed:{plugins:function(){return{ChartDataLabels:_.a}},doughnutChartOptions:function(){return{maintainAspectRatio:!1,legend:!1,plugins:{datalabels:{color:function(t){var e=t.dataIndex;return"#EEE"===t.dataset.backgroundColor[e]?"#000":"#FFF"},formatter:function(t,e){return t+"%"}}},tooltips:{callbacks:{label:function(t,data){return data.labels[t.index]+": "+data.datasets[0].data[t.index]+"%"}}}}},chartData:function(){return{datasets:[{borderWidth:0,backgroundColor:this.colors,data:this.doughnutChartData.values}],labels:this.doughnutChartData.labels}}}},D=(n(357),n(41)),F=Object(D.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("DoughnutChart",{staticClass:"doughnut-chart",attrs:{data:t.chartData,options:t.doughnutChartOptions}})],1)}),[],!1,null,"79283961",null).exports,S=(n(17),{name:"SummaryTimeseriesChart",components:{TimeseriesChart:{extends:x.a,props:["data","options"],mounted:function(){this.renderChart(this.data,this.options)},watch:{data:function(){this.renderChart(this.data,this.options)}}}},props:["timeseriesChartData","chartType"],data:function(){return{months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},computed:{timeseriesChartOptions:function(){return{maintainAspectRatio:!1,plugins:{datalabels:{display:!1}},scales:{yAxes:[{id:"y-axis-left",scaleLabel:{display:!0,labelString:this.chartType+" (USD)"},gridLines:{color:"#EEE",drawBorder:!1,drawOnChartArea:!0,drawTicks:!1},ticks:{beginAtZero:!0,fontColor:"#333",fontFamily:"Source Sans Pro",fontSize:11,padding:10,callback:function(t,e,n){return v()(t).format("$0.0a").toUpperCase()}},position:"left"}],xAxes:[{barPercentage:.9,categoryPercentage:.3,gridLines:{color:"#000",drawOnChartArea:!1,drawTicks:!1},ticks:{fontColor:"#333",fontFamily:"Source Sans Pro",fontSize:11,padding:10}}]},legend:{display:!1},tooltips:{callbacks:{label:function(t,data){return(0===t.datasetIndex||1===t.datasetIndex?"Cumulative":"Monthly")+" "+data.datasets[t.datasetIndex].label+": $"+v()(t.value).format("0,0")}}}}},chartData:function(){var t=this,e=this.timeseriesChartData.dates.map((function(e){var n=e.split("-"),r=new Date(n[0],n[1]-1);return t.months[r.getMonth()]+" "+r.getFullYear()})),data=[];return this.chartType.includes("Cumulative")&&data.push({type:"line",borderColor:"#007CE1",borderDash:[4,2],borderWidth:1,data:this.timeseriesChartData.cumulative.commitments,fill:!1,label:"Commitments",pointBackgroundColor:"#FFF",pointRadius:4,tension:0,yAxisID:"y-axis-left"},{type:"line",borderColor:"#F2645A",borderDash:[4,2],borderWidth:1,data:this.timeseriesChartData.cumulative.spending,fill:!1,label:"Spending",pointBackgroundColor:"#FFF",pointRadius:4,tension:0,yAxisID:"y-axis-left"}),this.chartType.includes("Monthly")&&data.push({label:"Commitments",backgroundColor:"#007CE1",data:this.timeseriesChartData.monthly.commitments,yAxisID:"y-axis-left"},{label:"Spending",backgroundColor:"#F2645A",data:this.timeseriesChartData.monthly.spending,yAxisID:"y-axis-left"}),{datasets:data,labels:e}},customLegend:function(){for(var t=[],i=0;i<this.chartData.datasets.length;i++){var e=this.chartData.datasets[i];this.chartData.datasets.length>2?(0===i&&t.push('<div><h6 class="d-inline">Cumulative: </h6>'),2===i&&t.push('</div><div class="mr-lg-4"><h6 class="d-inline">Monthly: </h6>')):(0===i&&this.chartType.includes("Cumulative")&&t.push('<div><h6 class="d-inline">Cumulative: </h6>'),0===i&&this.chartType.includes("Monthly")&&t.push('<div><h6 class="d-inline">Monthly: </h6>')),"line"===e.type?t.push('<div class="key key-circle mr-1 ml-2" style="border-color:'+e.borderColor+'"></div>'+e.label):t.push('<div class="key key-square mr-1 ml-2" style="background-color:'+e.backgroundColor+'"></div>'+e.label)}return t.push("</div>"),t.join("")}}}),w=(n(359),Object(D.a)(S,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("TimeseriesChart",{staticClass:"timeseries-chart",attrs:{data:t.chartData,options:t.timeseriesChartOptions}}),t._v(" "),n("div",{staticClass:"timeseries-legend text-center",domProps:{innerHTML:t._s(t.customLegend)}})],1)}),[],!1,null,null,null).exports),O=n(331),P={name:"RankedList",components:{},filters:{truncate:function(text,t,e){return text.length>t?text.substring(0,t)+e:text}},props:["items","colors","lastUpdatedDate"],data:function(){return{tableFields:[{key:"color",label:"Color"},"item","value"]}}},T=(n(361),Object(D.a)(P,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"scroll-list-container"},[n("div",{staticClass:"scroll-list mt-3"},[n("b-table",{staticClass:"summary-table mr-5 mb-0",attrs:{borderless:"",small:"",fields:t.tableFields,items:t.items},scopedSlots:t._u([{key:"cell(color)",fn:function(data){return[n("div",{staticClass:"color-key",style:data.index<5?"background-color: "+t.colors[data.index]:"background-color: "+t.colors[5]})]}},{key:"cell(item)",fn:function(data){return[n("abbr",{attrs:{title:data.item.item}},[t._v(t._s(t._f("truncate")(data.item.item,20,"...")))])]}}])})],1),t._v(" "),n("div",{staticClass:"scroll-list-overlay"})]),t._v(" "),n("div",{staticClass:"scroll-list-footer mt-2"},[n("span",{staticClass:"small text-muted"},[t._v(t._s(t.lastUpdatedDate)+" | IATI")]),t._v(" "),n("span",[t._v("(USD)")])])])}),[],!1,null,null,null).exports),R={components:{DoughnutChart:F,TimeseriesChart:w,DownloadDataButton:O.a,RankedList:T},data:function(){return{initFilterOption:"#org+id",selectedFilterDimension:"#org+id",selectedFilter:"*",selectedFilterLabel:"",filterOptions:[{text:"By Publishing Organization",value:"#org+id",label:"publishing organizations"},{text:"By Recipient Country or Region",value:"#country",label:"recipient countries and regions"},{text:"By Sector",value:"#sector",label:"sectors"}],selectedRankingFilter:"#country",rankingFilter:[[{text:"By Recipient Country or Region",value:"#country"},{text:"By Sector",value:"#sector"}],[{text:"By Publishing Org",value:"#org+id"},{text:"By Sector",value:"#sector"}],[{text:"By Recipient Country or Region",value:"#country"},{text:"By Publishing Org",value:"#org+id"}]],timeseriesSelect:"Cumulative and Monthly Commitments/Spending",timeseriesSelectOptions:["Cumulative and Monthly Commitments/Spending","Cumulative Commitments/Spending","Monthly Commitments/Spending"],quickFilters:[[{name:"Asian Development Bank",id:"xm-dac-46004"},{name:"Inter-American Development Bank",id:"xi-iati-iadb"},{name:"UNOCHA - Central Emergency Response Fund (CERF)",id:"xm-ocha-cerf"},{name:"United Nations Development Programme",id:"xm-dac-41114"},{name:"United States Agency for International Development (USAID)",id:"us-gov-1"},{name:"World Food Programme",id:"xm-dac-41140"}],[{name:"India",id:"India"},{name:"Brazil",id:"Brazil"},{name:"Afghanistan",id:"Afghanistan"},{name:"Bangladesh",id:"Bangladesh"},{name:"South Sudan",id:"South Sudan"}],[{name:"Emergency Response",id:"Emergency Response"},{name:"Health",id:"Health"},{name:"Education",id:"Education"},{name:"Reconstruction Relief & Rehabilitation",id:"Reconstruction Relief & Rehabilitation"},{name:"Transport & Storage",id:"Transport & Storage"}]],strictToggleOptions:[{label:"Loose",value:"off"},{label:"Strict",value:"on"}],humanitarianToggleOptions:[{label:"No",value:"off"},{label:"Yes",value:"on"}],commitmentColors:["#007CE1","#3393E2","#65ABE3","#98C3E4","#CADAE5","#EEE"],spendingColors:["#C6382E","#DC4E44","#F2645A","#F0948F","#EDC4C3","#EEE"],months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],fullData:[],filteredData:[],filterParams:{},orgNameIndex:[],lastUpdatedDate:"",skippedTransactions:0,loaded:!1}},head:function(){return{title:y.a.head.title+": Commitments and Spending"}},computed:{isBusy:function(){return 0===this.fullData.length},tooltips:function(){return this.$store.state.tooltips},isProd:function(){return this.$store.state.isProd},reportingOrgs:function(){var t=this,e=Object(l.a)(new Set(this.fullData.map((function(t){return t["#org+id"]}))));return e=e.map((function(e){var n={};return n.value=e,n.text=t.getOrgName(e),n})),this.populateSelect(e,"All publishing organizations")},countries:function(){var t=Object(l.a)(new Set(this.fullData.map((function(t){return t["#country"]}))));return t=t.map((function(t){var e={};return e.value=t,e.text=t,e})),this.populateSelect(t,"All recipient countries and regions")},sectors:function(){var t=Object(l.a)(new Set(this.fullData.map((function(t){return t["#sector"]}))));return t=t.map((function(t){var e={};return e.value=t,e.text=t,e})),this.populateSelect(t,"All sectors")},commitments:function(){return this.filteredData.filter((function(t){return"commitments"===t["#x_transaction_type"]}))},spending:function(){return this.filteredData.filter((function(t){return"spending"===t["#x_transaction_type"]}))},commitmentsRanked:function(){return this.getRankedList(this.commitments)},spendingRanked:function(){return this.getRankedList(this.spending)},orgCount:function(){return Object(l.a)(new Set(this.filteredData.map((function(t){return t["#org+id"]})))).length},countryCount:function(){return Object(l.a)(new Set(this.filteredData.map((function(t){return t["#country"]})))).length},sectorCount:function(){return Object(l.a)(new Set(this.filteredData.map((function(t){return t["#sector"]})))).length},activityCount:function(){return Object(l.a)(new Set(this.filteredData.map((function(t){return t["#activity+code"]})))).length},totalCommitments:function(){return this.getTotal(this.commitments)},totalSpending:function(){return this.getTotal(this.spending)},tagPattern:function(){return"#org+id"===this.selectedFilterDimension&&"*"!==this.selectedFilter?"#value+total":"#value+net"},commitmentsTable:function(){return this.populateList(this.commitmentsRanked)},spendingTable:function(){return this.populateList(this.spendingRanked)},commitmentsDonut:function(){return this.populateDonut(this.totalCommitments,this.commitmentsRanked)},spendingDonut:function(){return this.populateDonut(this.totalSpending,this.spendingRanked)},timeseriesData:function(){var t=this,e=Object(l.a)(new Set(this.filteredData.map((function(t){return t["#date+month"]})))),n=Object.values(this.commitments.reduce((function(e,n){var r=Number(n[t.tagPattern]);return r=r<0?0:r,e[n["#date+month"]]=e[n["#date+month"]]+r||r,e}),[])),r=Object.values(this.spending.reduce((function(e,n){var r=Number(n[t.tagPattern]);return r=r<0?0:r,e[n["#date+month"]]=e[n["#date+month"]]+r||r,e}),[]));return{dates:e,monthly:{commitments:n,spending:r},cumulative:{commitments:this.getCumulativeSeries(n),spending:this.getCumulativeSeries(r)}}}},mounted:function(){var t=this;this.toggleBodyClass("addClass","index"),this.filterParams={humanitarian:"off",strict:"off"},this.filterParams["#org+id"]="*",this.filterParams["#country"]="*",this.filterParams["#sector"]="*";d.a.get("https://ocha-dap.github.io/hdx-scraper-iati-viz/covid/reporting_orgs.json").then((function(e){t.orgNameIndex=e.data.data,t.$store.commit("setorgNameIndex",e.data.data),t.$nextTick((function(){"org"in t.$route.query&&(t.filterParams["#org+id"]=t.$route.query.org,t.querySetup("#org+id")),"country"in t.$route.query&&(t.filterParams["#country"]=t.$route.query.country,t.querySetup("#country")),"sector"in t.$route.query&&(t.filterParams["#sector"]=t.$route.query.sector,t.querySetup("#sector")),"humanitarian"in t.$route.query&&(t.filterParams.humanitarian=t.$route.query.humanitarian),"strict"in t.$route.query&&(t.filterParams.strict=t.$route.query.strict),t.loadData()}))}))},updated:function(){this.createStickyHeader()},destroyed:function(){this.toggleBodyClass("removeClass","index")},methods:{loadData:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://ocha-dap.github.io/hdx-scraper-iati-viz/covid/transactions.json",e.next=3,d.a.get("tooltips.csv").then((function(e){return h()().fromString(e.data).then((function(e){t.$store.commit("setTooltips",e)}))}));case 3:return e.next=5,d.a.get(n).then((function(e){var n=e.data.metadata,r=new Date(n["#date+run"]),o=t.months[r.getMonth()]+" "+r.getDate()+", "+r.getFullYear();t.lastUpdatedDate=o,t.fullData=e.data.data,t.filteredData=t.filterData(),"*"!==t.selectedFilter?t.selectedFilterLabel="#org+id"===t.selectedFilterDimension?t.getOrgName(t.selectedFilter):t.selectedFilter:t.setDefaultFilterLabel(t.selectedFilterDimension)}));case 5:case"end":return e.stop()}}),e)})))()},urlQuery:function(){var t={};return"*"!==this.filterParams["#org+id"]&&(t.org=this.filterParams["#org+id"]),"*"!==this.filterParams["#country"]&&(t.country=this.filterParams["#country"]),"*"!==this.filterParams["#sector"]&&(t.sector=this.filterParams["#sector"]),"off"!==this.filterParams.humanitarian&&(t.humanitarian=this.filterParams.humanitarian),"off"!==this.filterParams.strict&&(t.strict=this.filterParams.strict),t},updateRouter:function(){this.$router.push({name:"index",query:this.urlQuery()})},querySetup:function(t){this.initFilterOption=t,this.selectedFilterDimension=t,this.selectedFilter=this.filterParams[t],this.selectedFilterLabel="#org+id"===t?this.getOrgName(this.selectedFilter):this.selectedFilter;var e=this.rankingFilter[this.getFilterID(t)];this.selectedRankingFilter=e[0].value},numberFormatter:function(t){return 0===t?"0":t?v()(t).format("0,0"):""},currencyFormatter:function(t){return v()(t).format("$0.0a")},onFilterOptionSelect:function(t){this.selectedFilterDimension=t;var e=this.rankingFilter[this.getFilterID(t)];this.selectedRankingFilter=e[0].value,this.resetParams(),this.setDefaultFilterLabel(t),this.updateFilteredData(),this.$mixpanelTrackAction("change content","Commitments and Spending Breakdown radio filter",t)},onSelect:function(t){this.selectedFilter=t,this.filterParams[this.selectedFilterDimension]=t,"*"!==t?this.selectedFilterLabel="#org+id"===this.selectedFilterDimension?this.getOrgName(t):t:this.setDefaultFilterLabel(this.selectedFilterDimension),this.updateFilteredData(),this.$mixpanelTrackAction("change content","Commitments and Spending Breakdown select filter",t)},onToggle:function(t){this.filterParams[t.target.parentElement.id]=t.target.value,this.updateFilteredData(),"*"!==this.selectedFilter?this.selectedFilterLabel="#org+id"===this.selectedFilterDimension?this.getOrgName(this.selectedFilter):this.selectedFilter:this.setDefaultFilterLabel(this.selectedFilterDimension),this.$mixpanelTrackAction("change content","Commitments and Spending Breakdown toggle filter",t.target.parentElement.id+" "+t.target.value)},onQuickFilter:function(t){t.preventDefault(),this.onSelect(t.target.id)},onSelectRanking:function(t){this.$mixpanelTrackAction("change content","Commitments and Spending Ranking select filter",t)},onSelectTimeline:function(t){this.$mixpanelTrackAction("change content","Commitments and Spending Timeline select filter",t)},setDefaultFilterLabel:function(t){var e=this.filterOptions.filter((function(option){return option.value===t})),n="";n="#org+id"===t?this.orgCount:"#country"===t?this.countryCount:this.sectorCount,this.selectedFilterLabel=n+" "+e[0].label.toLowerCase()},updateFilteredData:function(){this.filteredData=this.filterData(),this.updateRouter()},filterData:function(){var t=this.fullData,e=this.filterParams,n=this.selectedFilterDimension;return e[n]&&"*"!==e[n]&&(t=t.filter((function(t){return t[n]===e[n]}))),"on"===e.humanitarian&&(t=t.filter((function(t){return 1===t["#indicator+bool+humanitarian"]}))),"on"===e.strict&&(t=t.filter((function(t){return 1===t["#indicator+bool+strict"]}))),t},populateSelect:function(data,t){var e=data.reduce((function(t,e){return t.push({value:e.value,text:e.text}),t}),[]).sort((function(a,b){return a.text<b.text?-1:1}));return e.unshift({value:"*",text:t}),e},populateList:function(data){var t=this;return data.reduce((function(e,n){return e.push({item:n[0],value:"$"+t.numberFormatter(n[1])}),e}),[]).sort((function(a,b){return b.value-a.value}))},populateDonut:function(t,e){var n=e.length>5?e.slice(0,5):e,r=n.reduce((function(t,e){return t+e[1]}),0);return r<t&&n.push(["Other or unspecified",t-r]),{values:n.reduce((function(e,n){var r=Number((n[1]/t*100).toFixed(1));return e.push(r),e}),[]),labels:n.map((function(t){return t[0]}))}},getOrgName:function(t){return this.orgNameIndex.filter((function(e){return e["#org+id+reporting"]===t}))[0]["#org+name+reporting"]},getOrgID:function(t){return this.orgNameIndex.filter((function(e){return e["#org+name+reporting"]===t}))[0]["#org+id+reporting"]},getCumulativeSeries:function(data){var t=0;return data.reduce((function(e,n){return t+=n,e.push(t),e}),[])},getTotal:function(data){var t=this,e=data.map((function(e){return Number(e[t.tagPattern])}));return e.length>0?e.reduce((function(t,e){return t+e})):0},getRankedList:function(data){var t=this,e=this.selectedRankingFilter,n={},r=Object.entries(data.reduce((function(r,o,l){var c=Number(o[t.tagPattern]),d="#org+id"===e?t.getOrgName(o[e]):o[e];return o[e].includes("Unspecified")?n[d]=n[d]+c||c:r[d]=r[d]+c||c,r}),{})).sort((function(a,b){return b[1]-a[1]})),o=Object.entries(n)[0];return void 0!==o&&("(Unspecified country)"===o[0]&&(o[0]="No country/region specified"),r.push(o)),r},getFilterID:function(){return"#sector"===this.selectedFilterDimension?2:"#country"===this.selectedFilterDimension?1:0},resetParams:function(){this.filterParams["#org+id"]="*",this.filterParams["#country"]="*",this.filterParams["#sector"]="*",this.selectedFilter="*"},toggleBodyClass:function(t,e){var n=document.body;"addClass"===t?n.classList.add(e):n.classList.remove(e)},createStickyHeader:function(){var t=document.getElementsByClassName("header-sticky")[0];this.loaded||void 0===t||(this.loaded=!0,new IntersectionObserver((function(t){var e=Object(r.a)(t,1)[0];return e.target.classList.toggle("is-stuck",e.intersectionRatio<1)}),{threshold:[1]}).observe(t))},scrollTo:function(t){var e=this.$refs[t].offsetTop-100;window.scrollTo(0,e)}}},L=(n(363),Object(D.a)(R,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.isBusy?[n("div",{staticClass:"custom-loader text-center text-secondary my-5"},[n("b-spinner",{staticClass:"align-middle"}),t._v(" "),n("strong",[t._v("Loading...")])],1)]:t._e(),t._v(" "),t.isBusy?t._e():[n("hr",{staticClass:"mt-4 mb-0"}),t._v(" "),n("div",{staticClass:"header-sticky"},[n("div",{staticClass:"container"},[n("h2",[t._v("\n          Transactions from "),n("b",[t._v(t._s(t.numberFormatter(t.activityCount)))]),t._v(" "),t.activityCount>1||0===t.activityCount?n("span",[t._v("activities")]):n("span",[t._v("activity")]),t._v(" by "),n("b",[t._v(t._s(t.selectedFilterLabel))])]),t._v(" "),n("a",{staticClass:"anchor",on:{click:function(e){return t.scrollTo("filters")}}},[t._v("Customize filters")])])]),t._v(" "),n("hr",{staticClass:"mt-0 mb-4"}),t._v(" "),n("b-container",[n("b-row",{ref:"filters"},[n("b-col",{attrs:{cols:"12",lg:"7"}},[n("b-form-group",{attrs:{label:"Filter:"}},[n("b-form-radio",{attrs:{name:"filterOptionGroup",value:t.filterOptions[0].value},on:{change:t.onFilterOptionSelect},model:{value:t.initFilterOption,callback:function(e){t.initFilterOption=e},expression:"initFilterOption"}},[t._v("\n              "+t._s(t.filterOptions[0].text)+"\n            ")]),t._v(" "),n("b-badge",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"info-icon p-0 ml-3 ml-md-0",attrs:{variant:"dark",pill:"",title:t.tooltips.filterPublishingOrg}},[t._v("\n              ?\n            ")]),n("br"),t._v(" "),n("b-form-radio",{attrs:{name:"filterOptionGroup",value:t.filterOptions[1].value},on:{change:t.onFilterOptionSelect},model:{value:t.initFilterOption,callback:function(e){t.initFilterOption=e},expression:"initFilterOption"}},[t._v("\n              "+t._s(t.filterOptions[1].text)+"\n            ")]),t._v(" "),n("b-badge",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"info-icon p-0 ml-3 ml-md-0",attrs:{variant:"dark",pill:"",title:t.tooltips.filterCountry}},[t._v("\n              ?\n            ")]),n("br"),t._v(" "),n("b-form-radio",{attrs:{name:"filterOptionGroup",value:t.filterOptions[2].value},on:{change:t.onFilterOptionSelect},model:{value:t.initFilterOption,callback:function(e){t.initFilterOption=e},expression:"initFilterOption"}},[t._v("\n              "+t._s(t.filterOptions[2].text)+"\n            ")]),t._v(" "),n("b-badge",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"info-icon p-0 ml-3 ml-md-0",attrs:{variant:"dark",pill:"",title:t.tooltips.filterSector}},[t._v("\n              ?\n            ")])],1),t._v(" "),"#org+id"===t.selectedFilterDimension?n("v-select",{staticClass:"filter-select filter-select-org mb-3",attrs:{value:t.selectedFilter,options:t.reportingOrgs,"get-option-key":function(option){return option.value},"get-option-label":function(option){return option.text},reduce:function(option){return option.value}},on:{input:t.onSelect},scopedSlots:t._u([{key:"search",fn:function(e){var r=e.attributes,o=e.events;return[n("input",t._g(t._b({staticClass:"vs__search",attrs:{placeholder:"Type organization name here"}},"input",r,!1),o))]}}],null,!1,2633457986)}):t._e(),t._v(" "),"#country"===t.selectedFilterDimension?n("v-select",{staticClass:"filter-select filter-select-country mb-3",attrs:{value:t.selectedFilter,options:t.countries,"get-option-key":function(option){return option.value},"get-option-label":function(option){return option.text},reduce:function(option){return option.value}},on:{input:t.onSelect},scopedSlots:t._u([{key:"search",fn:function(e){var r=e.attributes,o=e.events;return[n("input",t._g(t._b({staticClass:"vs__search",attrs:{placeholder:"Type country or region name here"}},"input",r,!1),o))]}}],null,!1,2513259188)}):t._e(),t._v(" "),"#sector"===t.selectedFilterDimension?n("v-select",{staticClass:"filter-select filter-select-sector mb-3",attrs:{value:t.selectedFilter,options:t.sectors,"get-option-key":function(option){return option.value},"get-option-label":function(option){return option.text},reduce:function(option){return option.value}},on:{input:t.onSelect},scopedSlots:t._u([{key:"search",fn:function(e){var r=e.attributes,o=e.events;return[n("input",t._g(t._b({staticClass:"vs__search",attrs:{placeholder:"Type sector name here"}},"input",r,!1),o))]}}],null,!1,2608167525)}):t._e(),t._v(" "),n("div",{staticClass:"quick-filter-list"},[t._v("\n            Quick filters:\n            "),n("ul",{staticClass:"horizontal-list d-inline"},t._l(t.quickFilters[t.getFilterID(t.selectedFilterDimension)],(function(filter){return n("li",{key:filter.id},[n("a",{attrs:{id:filter.id,href:"#",title:filter.name},on:{click:t.onQuickFilter}},[t._v(t._s(filter.name))])])})),0)])],1),t._v(" "),n("b-col",[n("b-row",[n("b-col",[t._v("\n              Filter for COVID-19 related transactions\n              "),n("b-badge",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"info-icon p-0",attrs:{variant:"dark",pill:"",title:t.tooltips.activitiesCOVID}},[t._v("\n                ?\n              ")]),t._v(":\n            ")],1),t._v(" "),n("b-col",[n("b-button-group",{attrs:{id:"strict"}},t._l(t.strictToggleOptions,(function(e,r){return n("b-button",{key:r,class:{active:e.value===t.filterParams.strict},attrs:{value:e.value},on:{click:function(e){return t.onToggle(e)}}},[t._v("\n                  "+t._s(e.label)+"\n                ")])})),1)],1)],1),t._v(" "),n("hr",{staticClass:"my-3"}),t._v(" "),n("b-row",[n("b-col",[t._v("\n              Only show humanitarian transactions\n              "),n("b-badge",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"info-icon p-0",attrs:{variant:"dark",pill:"",title:t.tooltips.activitiesHumanitarian}},[t._v("\n                ?\n              ")]),t._v(":\n            ")],1),t._v(" "),n("b-col",[n("b-button-group",{attrs:{id:"humanitarian"}},t._l(t.humanitarianToggleOptions,(function(e,r){return n("b-button",{key:r,class:{active:e.value===t.filterParams.humanitarian},attrs:{value:e.value},on:{click:function(e){return t.onToggle(e)}}},[t._v("\n                  "+t._s(e.label)+"\n                ")])})),1)],1)],1),t._v(" "),n("hr",{staticClass:"my-3"}),t._v(" "),n("b-row",[n("b-col",{staticClass:"mt-3",attrs:{cols:"12",md:"8"}},[n("DownloadDataButton",{attrs:{type:"transactions","filter-params":t.filterParams,"selected-filter-dimension":t.selectedFilterDimension}})],1)],1)],1)],1),t._v(" "),n("hr",{staticClass:"mt-4 mb-0"})],1),t._v(" "),n("b-container",[n("h2",{staticClass:"header"},[t._v("\n        Outgoing Commitments and Spending Ranking \n        "),n("b-badge",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"info-icon p-0",attrs:{variant:"dark",pill:"",title:t.tooltips.rankingHeader}},[t._v("\n          ?\n        ")])],1),t._v(" "),n("b-row",[n("b-col",{attrs:{cols:"12",lg:"6"}},[n("b-form-select",{staticClass:"form-select px-2 ml-3 mb-3",attrs:{options:t.rankingFilter[t.getFilterID(t.selectedFilterDimension)]},on:{input:t.onSelectRanking},model:{value:t.selectedRankingFilter,callback:function(e){t.selectedRankingFilter=e},expression:"selectedRankingFilter"}})],1)],1),t._v(" "),n("b-row",[n("b-col",[n("div",{staticClass:"key-figure-container"},[n("DoughnutChart",{attrs:{"doughnut-chart-data":t.commitmentsDonut,colors:t.commitmentColors}}),t._v(" "),n("div",{staticClass:"key-figure-breakdown w-lg-100 mx-lg-4"},[n("h3",[t._v("\n                Total Outgoing Commitments (USD)\n                "),n("b-badge",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"info-icon p-0",attrs:{variant:"dark",pill:"",title:t.tooltips.totalCommitments}},[t._v("\n                  ?\n                ")])],1),t._v(" "),n("div",{staticClass:"key-figure-num"},[t._v("\n                "+t._s(t.currencyFormatter(t.totalCommitments))+"\n              ")]),t._v(" "),n("RankedList",{attrs:{items:t.commitmentsTable,colors:t.commitmentColors,"last-updated-date":t.lastUpdatedDate}})],1)],1)]),t._v(" "),n("b-col",[n("div",{staticClass:"key-figure-container"},[n("DoughnutChart",{attrs:{"doughnut-chart-data":t.spendingDonut,colors:t.spendingColors}}),t._v(" "),n("div",{staticClass:"key-figure-breakdown w-lg-100 ml-lg-4 mr-lg-5"},[n("h3",[t._v("\n                Total Spending (USD)\n                "),n("b-badge",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"info-icon p-0",attrs:{variant:"dark",pill:"",title:t.tooltips.totalSpending}},[t._v("\n                  ?\n                ")])],1),t._v(" "),n("div",{staticClass:"key-figure-num"},[t._v("\n                "+t._s(t.currencyFormatter(t.totalSpending))+"\n              ")]),t._v(" "),n("RankedList",{attrs:{items:t.spendingTable,colors:t.spendingColors,"last-updated-date":t.lastUpdatedDate}})],1)],1)])],1),t._v(" "),n("h2",{staticClass:"header"},[t._v("\n        Outgoing Commitments and Spending Over Time \n        "),n("b-badge",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"info-icon p-0",attrs:{variant:"dark",pill:"",title:t.tooltips.timelineHeader}},[t._v("\n          ?\n        ")])],1),t._v(" "),n("b-row",[n("b-col",{attrs:{cols:"12",lg:"6"}},[n("b-form-select",{staticClass:"form-select pl-2 pr-4 ml-3 mt-0 mb-4",attrs:{options:t.timeseriesSelectOptions},on:{input:t.onSelectTimeline},model:{value:t.timeseriesSelect,callback:function(e){t.timeseriesSelect=e},expression:"timeseriesSelect"}})],1),t._v(" "),n("b-col")],1),t._v(" "),n("TimeseriesChart",{attrs:{"timeseries-chart-data":t.timeseriesData,"chart-type":t.timeseriesSelect}}),t._v(" "),n("div",{staticClass:"small text-muted mt-4 ml-4"},[t._v("\n        "+t._s(t.lastUpdatedDate)+" | IATI\n      ")]),t._v(" "),n("hr")],1)]],2)}),[],!1,null,null,null));e.default=L.exports}}]);