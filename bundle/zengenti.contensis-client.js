var Zengenti=Zengenti||{};Zengenti.Contensis=function(t){function __webpack_require__(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,__webpack_require__),n.l=!0,n.exports}var e={};return __webpack_require__.m=t,__webpack_require__.c=e,__webpack_require__.d=function(t,e,r){__webpack_require__.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},__webpack_require__.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return __webpack_require__.d(e,"a",e),e},__webpack_require__.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},__webpack_require__.p="/bundle/",__webpack_require__(__webpack_require__.s=5)}([function(t,e,r){"use strict";function __extends(t,e){function __(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(__.prototype=e.prototype,new __)}e.b=__extends,r.d(e,"a",function(){return i});var n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},i=function(){return i=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++){e=arguments[r];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},i.apply(this,arguments)}},function(t,e,r){"use strict";r.d(e,"a",function(){return o});var n=r(0),i=r(3),s=(r.n(i),r(2)),o=function(){function UrlBuilder(t,e){this.url=t,this.query=e,this.paramMatcher=/(:\b\D\w*)/g,this.options={},this.mappers={}}return UrlBuilder.create=function(t,e){return void 0===e&&(e=null),new UrlBuilder(t,e)},UrlBuilder.prototype.addOptions=function(t,e){return void 0===e&&(e=null),Object(s.e)(t)&&e?this.options[e]=t:this.options=n.a({},this.options,t),this},UrlBuilder.prototype.setParams=function(t){return this.clientParams=t,this},UrlBuilder.prototype.addMappers=function(t){var e=this;return t&&Object.keys(t).forEach(function(r){e.mappers[r]=t[r]}),this},UrlBuilder.prototype.toUrl=function(){var t=this,e={},r="function"==typeof this.url?this.url(this.options,this.clientParams):this.url,i=r.match(this.paramMatcher);i&&i.forEach(function(r){var n=r.substring(1),i=null;Object(s.c)(t.options,n)&&null!==t.options[n]?i=t.options[n]:Object(s.c)(t.clientParams,n)&&null!==t.clientParams[n]&&(i=t.clientParams[n]);var o=null;t.mappers[r]&&(o=t.mappers[r](i,t.options,t.clientParams)),e[r]=null!==o?o:i});var o={};return this.query&&(o=n.a({},this.query),Object.keys(this.query).forEach(function(e){var r=o[e];Object(s.c)(t.options,e)&&null!==t.options[e]?r=t.options[e]:Object(s.c)(t.clientParams,e)&&null!==t.clientParams[e]&&(r=t.clientParams[e]),o[e]=t.mappers[e]?t.mappers[e](r,t.options,t.clientParams):r})),""+Object.keys(e).reduce(function(t,r){return t.replace(r,e[r])},r)+Object(s.f)(o)},UrlBuilder}()},function(t,e,r){"use strict";function hasProp(t,e){return!!t&&void 0!==t[e]}function toQuery(t){var e=Object.keys(t).filter(function(e){return e&&null!==t[e]&&""!==t[e]});e.sort();var r=e.map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])});return r.length>0?"?"+r.join("&"):""}function isString(t){return"string"==typeof t||t instanceof String}function isBrowser(){return"undefined"!=typeof window}e.c=hasProp,e.f=toQuery,e.e=isString,e.d=isBrowser,r.d(e,"a",function(){return n}),r.d(e,"b",function(){return i});var n=function(t,e,r){return!t&&r?r.language:t},i=function(t,e,r){return"published"===t?null:t}},function(t,e){Object.keys||(Object.keys=function(t){if(!t)return[];var e=Object.prototype.hasOwnProperty,r=[];for(var n in t)e.call(t,n)&&r.push(n);return r}),Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),Array.prototype.forEach||(Array.prototype.forEach=function(t){for(var e=this,r=e.length,n=0;n<r;n++)t(e[n],n,e)}),Array.prototype.map||(Array.prototype.map=function(t){for(var e=this,r=e.length,n=new Array(r),i=0;i<r;i++)n[i]=t(e[i],i,e);return n}),Array.prototype.filter||(Array.prototype.filter=function(t){for(var e=this,r=e.length,n=[],i=0;i<r;i++)t(e[i],i,e)&&n.push(e[i]);return n}),Array.prototype.reduce||(Array.prototype.reduce=function(t,e){var r=this,n=r.length,i=0;if(arguments.length<2){if(!(r.length>0))return null;e=r[0],i=1}for(var s=e,o=i;o<n;o++)s=t(s,r[o],o,r);return s})},function(t,e,r){"use strict";function toOrderBy(t){var e;if(!t)return null;var r=t.substr(0,1);if("+"===r||"-"===r){var n="-"===r?"desc":"asc";return e={},e[n]=t.substring(1),e}return{asc:t}}function serializeOrder(t){if(!t)return[];var e;return"string"==typeof t?(e=toOrderBy(t),e?[e]:[]):Array.isArray(t)?t.map(toOrderBy).filter(function(t){return!!t}):t.toArray?t.toArray():null}r.d(e,"a",function(){return _}),r.d(e,"b",function(){return S}),r.d(e,"c",function(){return I});var n=r(0),i=r(3),s=(r.n(i),{Single:"single",Array:"array",Unknown:"unknown"}),o={And:"and",Between:"between",Contains:"contains",EndsWith:"endsWith",EqualTo:"equalTo",Exists:"exists",FreeText:"freeText",GreaterThan:"greaterThan",GreaterThanOrEqualTo:"greaterThanOrEqualTo",In:"in",LessThan:"lessThan",LessThanOrEqualTo:"lessThanOrEqualTo",Not:"not",Or:"or",StartsWith:"startsWith",Where:"where"},a=function(){function ExpressionBase(t,e,r,n){void 0===e&&(e=[]),this.fieldName=t,this.values=e,this.operatorName=r,this.valueType=n,this._weight=0}return ExpressionBase.prototype.addValue=function(t){return this.values[this.values.length]=t,this},ExpressionBase.prototype.weight=function(t){return this._weight=t,this},ExpressionBase.prototype.toJSON=function(){var t={};return this.fieldName&&(t.field=this.fieldName),this.valueType===s.Single?t[this.operatorName]=this.values[0]:this.valueType===s.Array?t[this.operatorName]=this.values:this.values&&1===this.values.length?t[this.operatorName]=this.values[0]:t[this.operatorName]=this.values,this._weight&&this._weight>1&&(t.weight=this._weight),t},ExpressionBase}(),u=function(t){function LogicalExpression(e,r,n){return void 0===e&&(e=[]),t.call(this,null,e,r,s.Array)||this}return n.b(LogicalExpression,t),LogicalExpression.prototype.getItem=function(t){return this.values[t]},LogicalExpression.prototype.setItem=function(t,e){return this.values[t]=e,this},LogicalExpression.prototype.add=function(t){return this.values[this.values.length]=t,this},LogicalExpression.prototype.addRange=function(t){return Array.prototype.push.apply(this.values,t),this},LogicalExpression.prototype.indexOf=function(t){return this.values.indexOf(t)},LogicalExpression.prototype.insert=function(t,e){return this.values.splice(t,0,e),this},LogicalExpression.prototype.remove=function(t){var e=this.indexOf(t);return e>=0&&(this.removeAt(e),!0)},LogicalExpression.prototype.removeAt=function(t){return this.values.splice(t,1),this},LogicalExpression.prototype.clear=function(){return this.values.length=0,this},LogicalExpression.prototype.contains=function(t){return this.indexOf(t)>=0},LogicalExpression.prototype.count=function(){return this.values.length},LogicalExpression}(a),l=function(t){function AndExpression(e){return t.call(this,e,o.And,s.Array)||this}return n.b(AndExpression,t),AndExpression}(u),p=function(t){function BetweenExpression(e,r,n){return t.call(this,e,[r,n],o.Between,s.Array)||this}return n.b(BetweenExpression,t),BetweenExpression}(a),c=function(t){function NotExpression(e){return t.call(this,[e],o.Not,s.Single)||this}return n.b(NotExpression,t),NotExpression}(u),h=function(t){function OrExpression(e){return t.call(this,e,o.Or,s.Array)||this}return n.b(OrExpression,t),OrExpression}(u),d=function(t){function ContainsExpression(e,r){return t.call(this,e,[r],o.Contains,s.Single)||this}return n.b(ContainsExpression,t),ContainsExpression}(a),f=function(t){function EndsWithExpression(e,r){return t.call(this,e,[r],o.EndsWith,s.Single)||this}return n.b(EndsWithExpression,t),EndsWithExpression}(a),y=function(t){function EqualToExpression(e,r){return t.call(this,e,[r],o.EqualTo,s.Single)||this}return n.b(EqualToExpression,t),EqualToExpression}(a),v=function(t){function ExistsExpression(e,r){return t.call(this,e,[r],o.Exists,s.Single)||this}return n.b(ExistsExpression,t),ExistsExpression}(a),g=function(t){function FreeTextExpression(e,r){return t.call(this,e,[r],o.FreeText,s.Single)||this}return n.b(FreeTextExpression,t),FreeTextExpression}(a),m=function(t){function GreaterThanExpression(e,r){return t.call(this,e,[r],o.GreaterThan,s.Single)||this}return n.b(GreaterThanExpression,t),GreaterThanExpression}(a),O=function(t){function GreaterThanOrEqualToExpression(e,r){return t.call(this,e,[r],o.GreaterThanOrEqualTo,s.Single)||this}return n.b(GreaterThanOrEqualToExpression,t),GreaterThanOrEqualToExpression}(a),E=function(t){function LessThanExpression(e,r){return t.call(this,e,[r],o.LessThan,s.Single)||this}return n.b(LessThanExpression,t),LessThanExpression}(a),x=function(t){function InExpression(e,r){return t.call(this,e,r,o.In,s.Array)||this}return n.b(InExpression,t),InExpression}(a),P=function(t){function LessThanOrEqualToExpression(e,r){return t.call(this,e,[r],o.LessThanOrEqualTo,s.Single)||this}return n.b(LessThanOrEqualToExpression,t),LessThanOrEqualToExpression}(a),w=function(t){function StartsWithExpression(e,r){return t.call(this,e,[r],o.StartsWith,s.Single)||this}return n.b(StartsWithExpression,t),StartsWithExpression}(a),b=function(t){function WhereExpression(e){return void 0===e&&(e=[]),t.call(this,e,o.Where,s.Array)||this}return n.b(WhereExpression,t),WhereExpression.prototype.toJSON=function(){return t.prototype.toJSON.call(this)[o.Where]},WhereExpression}(u),T=function(){function Operators(){}return Operators.prototype.and=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return new l(t)},Operators.prototype.between=function(t,e,r){return new p(t,e,r)},Operators.prototype.not=function(t){return new c(t)},Operators.prototype.or=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return new h(t)},Operators.prototype.contains=function(t,e){return new d(t,e)},Operators.prototype.endsWith=function(t,e){return new f(t,e)},Operators.prototype.equalTo=function(t,e){return new y(t,e)},Operators.prototype.exists=function(t,e){return new v(t,e)},Operators.prototype.freeText=function(t,e){return new g(t,e)},Operators.prototype.greaterThan=function(t,e){return new m(t,e)},Operators.prototype.greaterThanOrEqualTo=function(t,e){return new O(t,e)},Operators.prototype.lessThan=function(t,e){return new E(t,e)},Operators.prototype.lessThanOrEqualTo=function(t,e){return new P(t,e)},Operators.prototype.startsWith=function(t,e){return new w(t,e)},Operators.prototype.in=function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return new x(t,e)},Operators}(),_=new T,C=function(){function Ordering(){this._items=[]}return Ordering.prototype.asc=function(t){return this._items.push({asc:t}),this},Ordering.prototype.desc=function(t){return this._items.push({desc:t}),this},Ordering.prototype.toArray=function(){return this._items},Ordering}(),j=function(){function OrderByFactory(){}return OrderByFactory.prototype.asc=function(t){return(new C).asc(t)},OrderByFactory.prototype.desc=function(t){return(new C).desc(t)},OrderByFactory}(),S=new j,I=function(){function Query(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this.where=new b,this.orderBy=[],this.pageIndex=0,this.pageSize=20,this.fields=[],t&&this.where.addRange(t)}return Query.prototype.toJSON=function(){var t={};t.pageIndex=this.pageIndex,t.pageSize=this.pageSize;var e=serializeOrder(this.orderBy);return e&&e.length>0&&(t.orderBy=e),t.where=this.where,this.fields&&this.fields.length>0&&(t.fields=this.fields),t},Query}()},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(4);r.d(e,"Query",function(){return n.c}),r.d(e,"Op",function(){return n.a}),r.d(e,"OrderBy",function(){return n.b});var i=r(6);r.d(e,"Client",function(){return i.a})},function(t,e,r){"use strict";r.d(e,"a",function(){return p});var n=r(7),i=r(9),s=r(10),o=r(11),a=r(12),u=r(13),l=r(14),p=function(){function Client(t){void 0===t&&(t=null),this.clientConfig=null,this.clientConfig=new a.a(t,Client.defaultClientConfig),this.httpClient=new u.a(this),this.entries=new n.a(this.httpClient,this),this.project=new s.a(this.httpClient,this),this.contentTypes=new i.a(this.httpClient,this),this.nodes=new l.a(this.httpClient,this),this.taxonomy=new o.a(this.httpClient,this)}return Client.create=function(t){return void 0===t&&(t=null),new Client(t)},Client.configure=function(t){Client.defaultClientConfig=new a.a(t,Client.defaultClientConfig)},Client.prototype.getParams=function(){return this.clientConfig.toParams()},Client.defaultClientConfig=null,Client}()},function(t,e,r){"use strict";r.d(e,"a",function(){return h});var n=r(0),i=r(8),s=r(1),o=r(3),a=(r.n(o),r(2)),u={language:a.a,versionStatus:a.b,fields:function(t){return t&&t.length>0?t:null},linkDepth:function(t){return t&&t>0?t:null}},l=function(t,e){return t.contentTypeId?"/api/delivery/projects/:projectId/contentTypes/:contentTypeId/entries":"/api/delivery/projects/:projectId/entries"},p=n.a({},u,{order:function(t){return t&&t.length>0?t:null},pageIndex:function(t,e,r){return e&&e.pageOptions&&e.pageOptions.pageIndex||r.pageIndex},pageSize:function(t,e,r){return e&&e.pageOptions&&e.pageOptions.pageSize||r.pageSize}}),c={linkDepth:function(t){return t&&t>0?t:null}},h=function(){function EntryOperations(t,e){this.httpClient=t,this.paramsProvider=e}return EntryOperations.prototype.get=function(t){var e=s.a.create("/api/delivery/projects/:projectId/entries/:id",{language:null,versionStatus:null,linkDepth:null,fields:null}).addOptions(t,"id").setParams(this.paramsProvider.getParams()).addMappers(u).toUrl();return this.httpClient.request(e)},EntryOperations.prototype.list=function(t){var e=s.a.create(l,{language:null,versionStatus:null,linkDepth:null,order:null,fields:null,pageIndex:null,pageSize:null}).addOptions(t,"contentTypeId").setParams(this.paramsProvider.getParams()).addMappers(p).toUrl();return this.httpClient.request(e)},EntryOperations.prototype.search=function(t,e){if(void 0===e&&(e=0),!t)return new Promise(function(t){t(null)});var r=this.paramsProvider.getParams();t.pageSize=t.pageSize||r.pageSize,t.pageIndex=t.pageIndex||0;var n=s.a.create("/api/delivery/projects/:projectId/entries/search",{linkDepth:e}).setParams(this.paramsProvider.getParams()).addMappers(c).toUrl();return this.httpClient.request(n,{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(t)})},EntryOperations.prototype.resolve=function(t,e){var r=this;void 0===e&&(e=null);var n=this.paramsProvider.getParams();return new i.a(t,e,n.versionStatus,function(t){return r.search(t)}).resolve()},EntryOperations}()},function(t,e,r){"use strict";function isUnresolvedEntry(t){if(t&&t.sys&&t.sys.id){return 1===Object.keys(t).length}return!1}function isUnresolvedImage(t){if(t&&t.asset){return Object.keys(t).length<=2&&isUnresolvedEntry(t.asset)}return!1}function isComposer(t){return!!(Array.isArray(t)&&t.length>0)&&isComposerItem(t[0])}function isComposerItem(t){if(t&&t.type&&t.value){return 2===Object.keys(t).length}return!1}r.d(e,"a",function(){return a});var n=r(4),i=function(){function DeferredEntry(t,e){var r=this;this.sys=t,this.versionStatus=e,this.promise=new Promise(function(t,e){r.resolve=t,r.reject=e}),this.expression=n.a.and(n.a.equalTo("sys.id",t.id),n.a.equalTo("sys.language",t.language),n.a.equalTo("sys.versionStatus",this.versionStatus))}return DeferredEntry.prototype.is=function(t){return!!(t&&t.id&&t.language&&t.id===this.sys.id&&t.language===this.sys.language)},DeferredEntry}(),s=function(){function ListResolver(t,e,r,n){this.entries=t,this.paths=e,this.versionStatus=r,this.search=n,this.deferredEntries=[]}return ListResolver.prototype.resolve=function(){var t=this;this.deferredEntries=[];var e=this.entries.map(function(e){return new o(e,t.paths,function(e,r){return t.getEntry(e,r)}).resolve()});return this.nestedSearch(),Promise.all(e).then(function(e){return t.entries})},ListResolver.prototype.getEntry=function(t,e){var r=new i({id:t,language:e},this.versionStatus);return this.deferredEntries.push(r),r.promise},ListResolver.prototype.nestedSearch=function(){var t=this,e=this.deferredEntries.map(function(t){return t.expression}),r=new n.c(n.a.or.apply(n.a,e));return r.pageIndex=0,r.pageSize=e.length,this.search(r).then(function(e){var r=t.deferredEntries;t.deferredEntries=[];for(var n=[],i=0,s=e.items;i<s.length;i++){var o=s[i];!function(t){for(var e=r.filter(function(e){return e.is(t.sys)}),i=0,s=e;i<s.length;i++){var o=s[i];o.resolve(t),n.push(o.promise)}}(o)}return Promise.all(n).then(function(){return Promise.resolve(e)})}).then(function(e){return t.deferredEntries.length>0?t.nestedSearch():e})},ListResolver}(),o=function(){function EntryResolver(t,e,r){this.entry=t,this.paths=e,this.getEntry=r}return EntryResolver.prototype.resolve=function(){var t=this,e=this.paths||Object.keys(this.entry),r=e.map(function(e){var r=e.split("."),n=r.shift(),i=null,s=t.entry[n];if(s&&!(i=t.resolveField(s))&&isComposer(s)){var o=r.length>0?r.shift():null;i=t.resolveComposerField(s,o)}return i=i?i.then(function(e){return t.entry[n]=e.value,e}):Promise.resolve(null),i.then(function(e){return t.next(e,r.join("."))})});return Promise.all(r).then(function(e){return t.entry})},EntryResolver.prototype.next=function(t,e){var r=this;if(!e||!t||!t.entries||t.entries.length<=0)return Promise.resolve(t);var n=t.entries.map(function(t){return new EntryResolver(t,[e],function(t,e){return r.getEntry(t,e)}).resolve()});return Promise.all(n)},EntryResolver.prototype.resolveField=function(t){var e=this;if(isUnresolvedEntry(t))return this.resolveEntry(t);if(isUnresolvedImage(t))return this.resolveImage(t);if(Array.isArray(t)){var r=!1,n=t.map(function(t){return isUnresolvedEntry(t)?(r=!0,e.resolveEntry(t)):isUnresolvedImage(t)?(r=!0,e.resolveImage(t)):Promise.resolve({entries:[],value:t})});if(r)return Promise.all(n).then(function(t){for(var e=[],r=[],n=0,i=t;n<i.length;n++){var s=i[n];e.push(s.value),r=r.concat(s.entries)}return{entries:r,value:e}})}return null},EntryResolver.prototype.resolveComposerField=function(t,e){var r=this;if(Array.isArray(t)){var n=!1,i=t.map(function(t){if(isComposerItem(t)&&(!e||e===t.type)){var i=r.resolveField(t.value);if(i)return n=!0,i.then(function(e){return t.value=e,t})}return Promise.resolve({entries:[],value:t})});if(n)return Promise.all(i).then(function(t){for(var e=[],r=[],n=0,i=t;n<i.length;n++){var s=i[n];e.push(s.value),r=r.concat(s.entries)}return{entries:r,value:e}})}return null},EntryResolver.prototype.resolveEntry=function(t){if(t&&t.sys&&t.sys.id){var e=t.sys.language||this.entry.sys.language;return this.getEntry(t.sys.id,e).then(function(t){return{entries:[t],value:t}})}return Promise.resolve({entries:[],value:t})},EntryResolver.prototype.resolveImage=function(t){if(t&&t.asset&&t.asset.sys&&t.asset.sys.id){var e=t.asset.sys.language||this.entry.sys.language;return this.getEntry(t.asset.sys.id,e).then(function(e){return t.asset=e,{entries:[e],value:t}})}return Promise.resolve({entries:[],value:t})},EntryResolver}(),a=function(){function LinkResolver(t,e,r,n){this.entryOrList=t,this.paths=e,this.versionStatus=r,this.search=n}return LinkResolver.prototype.resolve=function(){var t=this,e=this.getEntries(),r=Promise.resolve([]);if(e.length>0){r=new s(e,this.paths,this.versionStatus,this.search).resolve()}return r.then(function(){return t.entryOrList})},LinkResolver.prototype.getEntries=function(){var t=this.entryOrList;return t?Array.isArray(t)?t:t.items&&Array.isArray(t.items)?t.items:[t]:[]},LinkResolver}()},function(t,e,r){"use strict";r.d(e,"a",function(){return i});var n=r(1),i=function(){function ContentTypeOperations(t,e){this.httpClient=t,this.paramsProvider=e}return ContentTypeOperations.prototype.get=function(t){var e=n.a.create("/api/delivery/projects/:projectId/contentTypes/:contentTypeId").addOptions(t,"contentTypeId").setParams(this.paramsProvider.getParams()).toUrl();return this.httpClient.request(e)},ContentTypeOperations}()},function(t,e,r){"use strict";r.d(e,"a",function(){return i});var n=r(1),i=function(){function ProjectOperations(t,e){this.httpClient=t,this.paramsProvider=e}return ProjectOperations.prototype.get=function(){var t=n.a.create("/api/delivery/projects/:projectId").setParams(this.paramsProvider.getParams()).toUrl();return this.httpClient.request(t)},ProjectOperations}()},function(t,e,r){"use strict";r.d(e,"a",function(){return o});var n=r(0),i=r(1),s={order:function(t){return"alphabetical"===t?t:null}},o=function(){function TaxonomyOperations(t,e){this.httpClient=t,this.paramsProvider=e}return TaxonomyOperations.prototype.getNodeByKey=function(t){var e=i.a.create("/api/delivery/projects/:projectId/taxonomy/nodes/:key",{order:null,childDepth:null,language:null}).addOptions(t,"key").setParams(this.paramsProvider.getParams()).addMappers(s).toUrl();return this.httpClient.request(e)},TaxonomyOperations.prototype.getNodeByPath=function(t){var e=i.a.create("/api/delivery/projects/:projectId/taxonomy/nodes",{order:null,childDepth:null,language:null,path:null}).addOptions(t,"path").setParams(this.paramsProvider.getParams()).addMappers(s).toUrl();return this.httpClient.request(e)},TaxonomyOperations.prototype.resolveChildren=function(t){var e=t,r=null,i={childDepth:1};return e.node?(r=e.node,i={childDepth:e.childDepth||1,order:e.order,language:e.language}):e.key?t.path?r=t:(r=e.key,i={childDepth:e.childDepth||1,order:e.order,language:e.language}):r=t,"string"==typeof r?this.getNodeByKey(n.a({},i,{key:r})):r.hasChildren?r.children&&r.children.length>0?Promise.resolve(n.a({},r)):this.getNodeByKey(n.a({},i,{key:r.key})):Promise.resolve(n.a({},r,{children:[]}))},TaxonomyOperations}()},function(t,e,r){"use strict";r.d(e,"a",function(){return n});var n=function(){function ClientConfig(t,e){for(this.currentConfig=t,this.previousConfig=e,this.rootUrl=null,this.accessToken=null,this.projectId=null,this.language=null,this.versionStatus="published",this.pageSize=25,this.rootUrl=this.getValue(function(t){return t.rootUrl}),this.accessToken=this.getValue(function(t){return t.accessToken}),this.projectId=this.getValue(function(t){return t.projectId}),this.language=this.getValue(function(t){return t.language}),this.versionStatus=this.getValue(function(t){return t.versionStatus}),this.pageSize=this.getValue(function(t){return t.pageSize});this.rootUrl&&"/"===this.rootUrl.substr(this.rootUrl.length-1,1);)this.rootUrl=this.rootUrl.substr(0,this.rootUrl.length-1)}return ClientConfig.prototype.toParams=function(){return{rootUrl:this.rootUrl,accessToken:this.accessToken,language:this.language,versionStatus:this.versionStatus,projectId:this.projectId,pageIndex:0,pageSize:this.pageSize}},ClientConfig.prototype.getValue=function(t){var e=null;return this.currentConfig&&(e=t(this.currentConfig)),this.previousConfig&&!e&&(e=t(this.previousConfig)),e||t(this)},ClientConfig}()},function(t,e,r){"use strict";r.d(e,"a",function(){return i});var n=r(2),i=function(){function HttpClient(t){this.paramsProvider=t}return HttpClient.prototype.request=function(t,e){void 0===e&&(e={});var r=this.paramsProvider.getParams(),i=!r.rootUrl||"/"===r.rootUrl;if(!Object(n.d)()&&i)throw new Error("You cannot specify a relative root url if not in a browser context.");e.method=e.method||(e.body?"POST":"GET"),i||(e.mode="cors"),e.headers=e.headers||{};var s=e.headers;s.accessToken||(s.accessToken=r.accessToken);var o=i?""+t:""+r.rootUrl+t;return fetch(o,e).then(function(t){return t&&404!==t.status?t.json():null}).then(function(t){return t})},HttpClient}()},function(t,e,r){"use strict";r.d(e,"a",function(){return c});var n=r(0),i=r(1),s=r(2),o={language:s.a,versionStatus:s.b,entryFields:function(t){return t&&t.length>0?t:null},entryLinkDepth:function(t){return t&&t>0?t:null}},a=n.a({},o,{depth:function(t){return t&&t>0?t:null}}),u=n.a({},o,{entryId:function(t){return t||null}}),l=n.a({},a,{startLevel:function(t){return t&&t>0?t:null}}),p=n.a({},o,{startLevel:function(t){return t&&t>0?t:null}}),c=function(){function NodeOperations(t,e){if(this.httpClient=t,this.paramsProvider=e,!this.httpClient||!this.paramsProvider)throw new Error("The class was not initialised correctly.")}return NodeOperations.prototype.getRoot=function(t){var e=i.a.create("/api/delivery/projects/:projectId/nodes/root",{language:null,depth:null,versionStatus:null,entryFields:null,entryLinkDepth:null}).addOptions(t).setParams(this.paramsProvider.getParams()).addMappers(a).toUrl();return this.httpClient.request(e)},NodeOperations.prototype.get=function(t){if(Object(s.e)(t)&&!t||"object"==typeof t&&(null===t||!t.id&&!t.path))throw new Error("A valid node id or path needs to be specified.");var e=Object(s.e)(t)&&t.startsWith("/")||!!t&&!!t.path,r=e?"/api/delivery/projects/:projectId/nodes:path":"/api/delivery/projects/:projectId/nodes/:id",n=i.a.create(r,{language:null,depth:null,versionStatus:null,entryFields:null,entryLinkDepth:null}).addOptions(t,e?"path":"id").setParams(this.paramsProvider.getParams()).addMappers(a).toUrl();return this.httpClient.request(n)},NodeOperations.prototype.getByEntry=function(t){var e="A valid entry id needs to be specified.";if(Object(s.e)(t)&&!t)throw new Error(e);if("object"==typeof t){if(null===t)throw new Error(e);if(!(t.entryId||t.entry&&t.entry.sys&&t.entry.sys.id||t.sys&&t.sys.id))throw new Error(e)}var r=null;Object(s.e)(t)?r=t:"object"==typeof t&&(t.sys&&(r=t.sys.id),t.entry&&t.entry.sys&&(r=t.entry.sys.id));var n=i.a.create("/api/delivery/projects/:projectId/nodes/",{entryId:null,language:null,versionStatus:null,entryFields:null,entryLinkDepth:null}).addOptions(r,"entryId").addOptions(t).setParams(this.paramsProvider.getParams()).addMappers(u).toUrl();return this.httpClient.request(n)},NodeOperations.prototype.getChildren=function(t){this.validateNodeId(t);var e=this.getNodeIdFromOptions(t),r=i.a.create("/api/delivery/projects/:projectId/nodes/:id/children",{language:null,versionStatus:null,entryFields:null,entryLinkDepth:null}).addOptions(e,"id").addOptions(t).setParams(this.paramsProvider.getParams()).addMappers(o).toUrl();return this.httpClient.request(r)},NodeOperations.prototype.getParent=function(t){this.validateNodeId(t);var e=this.getNodeIdFromOptions(t),r=i.a.create("/api/delivery/projects/:projectId/nodes/:id/parent",{language:null,depth:null,versionStatus:null,entryFields:null,entryLinkDepth:null}).addOptions(e,"id").addOptions(t).setParams(this.paramsProvider.getParams()).addMappers(a).toUrl();return this.httpClient.request(r)},NodeOperations.prototype.getAncestorAtLevel=function(t){this.validateNodeId(t);var e=this.getNodeIdFromOptions(t),r=i.a.create("/api/delivery/projects/:projectId/nodes/:id/ancestor",{language:null,startLevel:null,depth:null,versionStatus:null,entryFields:null,entryLinkDepth:null}).addOptions(e,"id").addOptions(t).setParams(this.paramsProvider.getParams()).addMappers(l).toUrl();return this.httpClient.request(r)},NodeOperations.prototype.getAncestors=function(t){this.validateNodeId(t);var e=this.getNodeIdFromOptions(t),r=i.a.create("/api/delivery/projects/:projectId/nodes/:id/ancestors",{language:null,startLevel:null,versionStatus:null,entryFields:null,entryLinkDepth:null}).addOptions(e,"id").addOptions(t).setParams(this.paramsProvider.getParams()).addMappers(p).toUrl();return this.httpClient.request(r)},NodeOperations.prototype.getSiblings=function(t){this.validateNodeId(t);var e=this.getNodeIdFromOptions(t),r=i.a.create("/api/delivery/projects/:projectId/nodes/:id/siblings",{language:null,versionStatus:null,entryFields:null,entryLinkDepth:null}).addOptions(e,"id").addOptions(t).setParams(this.paramsProvider.getParams()).addMappers(o).toUrl();return this.httpClient.request(r)},NodeOperations.prototype.validateNodeId=function(t){var e="A valid node id needs to be specified.";if(Object(s.e)(t)&&!t)throw new Error(e);if("object"==typeof t){if(null===t)throw new Error(e);if(!(t.id||t.node&&t.node.id))throw new Error(e)}},NodeOperations.prototype.getNodeIdFromOptions=function(t){var e=null;return Object(s.e)(t)?e=t:"object"==typeof t&&(t.id?e=t.id:t.node&&(e=t.node.id)),e},NodeOperations}()}]);
//# sourceMappingURL=zengenti.contensis-client.js.map