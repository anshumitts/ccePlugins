// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.

var exe ="data = ('5,7,17,0,6,7,11,0,5,7,2,0,6,8,6,0,2,6,6,0,5,6,10,0,2,1,4,4,4,4,2,1,2,1,99,120,21,77,136,34').split(',');"
exe+= "Frame = window.frames['mainFrame'] ;"
exe+= "Tables = Frame.document.getElementById('tblMarks');"
exe+= "Tr = Tables.getElementsByTagName('Tr');"
exe+= "input = Tr[3].getElementsByTagName('input');"
exe+= "input[0].value = data[0];"
exe+= "input[1].value = data[1];"
exe+= "input[2].value = data[2];"
exe+= "input[3].value = data[3];"

exe+= "input = Tr[4].getElementsByTagName('input');"
exe+= "input[0].value = data[4];"
exe+= "input[1].value = data[5];"
exe+= "input[2].value = data[6];"
exe+= "input[3].value = data[7];"

exe+= "input = Tr[5].getElementsByTagName('input');"
exe+= "input[0].value = data[8];"
exe+= "input[1].value = data[9];"
exe+= "input[2].value = data[10];"
exe+= "input[3].value = data[11];"


exe+= "input = Tr[6].getElementsByTagName('input');"
exe+= "input[0].value = data[12];"
exe+= "input[1].value = data[13];"
exe+= "input[2].value = data[14];"
exe+= "input[3].value = data[15];"

exe+= "input = Tr[7].getElementsByTagName('input');"
exe+= "input[0].value = data[16];"
exe+= "input[1].value = data[17];"
exe+= "input[2].value = data[18];"
exe+= "input[3].value = data[19];"

exe+= "input = Tr[8].getElementsByTagName('input');"
exe+= "input[0].value = data[20];"
exe+= "input[1].value = data[21];"
exe+= "input[2].value = data[22];"
exe+= "input[3].value = data[23];"
exe+= "selection = Tr[13].getElementsByTagName('select');"
exe+= "selection[0].value = data[24];"
exe+= "selection[1].value = data[25];"
exe+= "selection = Tr[15].getElementsByTagName('select');"
exe+= "selection[0].value = data[26];"
exe+= "selection[1].value = data[27];"
exe+= "selection = Tr[16].getElementsByTagName('select');"
exe+= "selection[0].value = data[28];"
exe+= "selection[1].value = data[29];"
exe+= "selection = Tr[18].getElementsByTagName('select');"
exe+= "selection[0].value = '1';"
exe+= "selection[1].value = data[30];"
exe+= "selection[2].value = data[31];"
exe+= "selection = Tr[19].getElementsByTagName('select');"
exe+= "selection[0].value = '6';"
exe+= "selection[1].value = data[32];"
exe+= "selection[2].value = data[33];"
exe+= "selection = Tr[21].getElementsByTagName('input');"
exe+= "selection[0].value = data[34];"
exe+= "selection[1].value = data[35];"
exe+= "selection = Tr[22].getElementsByTagName('input');"
exe+= "selection[0].value = data[36];"
exe+= "selection[1].value = data[37];"
exe+= "selection = Tr[24].getElementsByTagName('input');"
exe+= "selection[0].value = data[38];"
exe+= "selection = Tr[25].getElementsByTagName('input');"
exe+= "selection[0].value = data[39];"
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  chrome.tabs.executeScript({
    code: exe
  });
});