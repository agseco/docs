(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{238:function(t,e,a){"use strict";a.r(e);var s={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},i=a(6),r=Object(i.a)(s,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[a("h1",{attrs:{id:"settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#settings","aria-hidden":"true"}},[t._v("#")]),t._v(" Settings")]),t._v(" "),a("blockquote",[a("p",[t._v("Restricted to members of the administrator role, Settings is where you create the data model, choose interfaces, define permissions, and configure the Directus App and API.")])]),t._v(" "),a("h2",{attrs:{id:"global-settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#global-settings","aria-hidden":"true"}},[t._v("#")]),t._v(" Global Settings")]),t._v(" "),a("p",[t._v("These are settings that apply to the entire project environment. They are stored as key-value-pairs within "),a("code",[t._v("directus_settings")]),t._v(".")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Key")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("project_name")])]),t._v(" "),a("td",[t._v("The title of the project")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("project_url")])]),t._v(" "),a("td",[t._v("The URL of the API's project")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("app_url")])]),t._v(" "),a("td",[t._v("URL of the Project's application")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("auto_sign_out")])]),t._v(" "),a("td",[t._v("The number of seconds until inactive users will be automatically logged out of the application. (auth token expiration)")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("default_limit")])]),t._v(" "),a("td",[t._v("Number of items per request")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("logo")])]),t._v(" "),a("td",[t._v("If you would like to use your own logo you can upload it here. 200px by 60px, PNG or SVG, with a white foreground and transparent background")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("sort_null_last")])]),t._v(" "),a("td",[t._v("Set the null values at last when sorting. Default "),a("code",[t._v("1")]),t._v(".")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("file_naming")])]),t._v(" "),a("td",[t._v("Naming convention for uploaded files. "),a("code",[t._v("uuid")]),t._v(" (default, universally unique identifier), "),a("code",[t._v("id")]),t._v(" ("),a("code",[t._v("directus_files.id")]),t._v(" left-padded with "),a("code",[t._v("0")]),t._v("), or the original name (sanitized: spaces become underscores, leading "),a("code",[t._v(".")]),t._v(" becomes "),a("code",[t._v("dot-")]),t._v(", incremented as needed for uniqueness)")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("youtube_api_key")])]),t._v(" "),a("td",[t._v("Youtube API key used by to fetch video information when upload a youtube link")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("thumbnail_not_found_location")])]),t._v(" "),a("td",[t._v("This image will be used when trying to generate a thumbnail with invalid options or an error happens on the server trying to create the image)")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("thumbnail_dimensions")])]),t._v(" "),a("td",[t._v("Comma separate value of dimensions in [width]x[height] format")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("thumbnail_quality_tags")])]),t._v(" "),a("td",[t._v("Key-Value json string of qualities tagged with a name. Ex: "),a("code",[t._v('{"best": 100}')]),t._v(". Ranging from 0 to 100. 0 = Worst quality and smaller file size to 100 best quality biggest file size.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("thumbnail_actions")])]),t._v(" "),a("td",[a("strong",[t._v("WIP")]),t._v("; List options to perform different thumbnail generation actions.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("thumbnail_cache_ttl")])]),t._v(" "),a("td",[t._v("Cache time to live in seconds. It sets HTTP "),a("code",[t._v("max-age")]),t._v(" and "),a("code",[t._v("Expires")]),t._v(" datetime. Default: "),a("code",[t._v("86400")]),t._v(" seconds = 1 day")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("trusted_proxies")])]),t._v(" "),a("td",[t._v("Trusted proxies IP address. By default all are trusted")])])])]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("UUID")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("uuid")]),t._v(" file naming uses UUID v5, and "),a("code",[t._v("6ba7b810-9dad-11d1-80b4-00c04fd430c8")]),t._v(" as the namespace DNS. A constant value defined in "),a("a",{attrs:{href:"https://github.com/ramsey/uuid/blob/5cadea8447ea1734b66e402aeb1a1739957d59f6/src/Uuid.php#L44",target:"_blank",rel:"noopener noreferrer"}},[t._v("ramsey/uuid"),a("OutboundLink")],1),t._v(" package.")])]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("Data Model")]),t._v(" "),a("p",[t._v("This data is structured quite differently than other browse/detail pages. Learn more at: "),a("router-link",{attrs:{to:"/advanced/app/global-settings-data-model.html"}},[t._v("Global Settings Data Model")])],1)]),t._v(" "),a("h2",{attrs:{id:"collections-and-fields"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#collections-and-fields","aria-hidden":"true"}},[t._v("#")]),t._v(" Collections and Fields")]),t._v(" "),a("h2",{attrs:{id:"roles-and-permissions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#roles-and-permissions","aria-hidden":"true"}},[t._v("#")]),t._v(" Roles and Permissions")]),t._v(" "),a("h2",{attrs:{id:"update-database"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-database","aria-hidden":"true"}},[t._v("#")]),t._v(" Update Database")]),t._v(" "),a("h2",{attrs:{id:"interfaces"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interfaces","aria-hidden":"true"}},[t._v("#")]),t._v(" Interfaces")]),t._v(" "),a("h2",{attrs:{id:"about-directus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#about-directus","aria-hidden":"true"}},[t._v("#")]),t._v(" About Directus")]),t._v(" "),a("h2",{attrs:{id:"activity-log"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#activity-log","aria-hidden":"true"}},[t._v("#")]),t._v(" Activity Log")]),t._v(" "),a("h2",{attrs:{id:"report-issue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#report-issue","aria-hidden":"true"}},[t._v("#")]),t._v(" Report Issue")]),t._v(" "),a("h2",{attrs:{id:"request-feature"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-feature","aria-hidden":"true"}},[t._v("#")]),t._v(" Request Feature")]),t._v(" "),a("h2",{attrs:{id:"connection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connection","aria-hidden":"true"}},[t._v("#")]),t._v(" Connection")]),t._v(" "),a("h2",{attrs:{id:"server-details"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#server-details","aria-hidden":"true"}},[t._v("#")]),t._v(" Server Details")]),t._v(" "),a("h2",{attrs:{id:"versions-and-updates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#versions-and-updates","aria-hidden":"true"}},[t._v("#")]),t._v(" Versions and Updates")])])},[],!1,null,null,null);r.options.__file="settings.md";e.default=r.exports}}]);