/*
  Copyright 2015 Ops For Developers

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
// ==UserScript==
// @name        Jenkins Show Advanced
// @namespace   http://opsfordevelopers.com/jenkins/userscripts
// @description Automatically shows the configuration hidden beneath the "Advanced..." buttons in Jenkins jobs
// @match       */job/*/configure
// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js
// @run-at      document-end
// @version     1.0
// @grant       none
// ==/UserScript==

function showAdvancedTables () {
  // hide the "Advanced..." buttons and show the advanced tables
  jQuery("div.advancedLink").hide();
  jQuery("table.advancedBody").show();

  // give to the advanced tables the full width and remove the adjacent td tags
  jQuery("table.advancedBody").parent("td").attr("colspan", 4);
  jQuery("table.advancedBody").parentsUntil("tbody").children("td:empty").remove();
}

jQuery(document).ready(function(){
  jQuery.noConflict();
  showAdvancedTables();
});
