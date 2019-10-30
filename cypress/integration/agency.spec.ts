import requestPromise from 'request-promise'
import assert from 'assert'
import { execSync } from 'child_process'

let environment = {
  commit: function() {
    return execSync('git rev-parse --short HEAD');
  },

  branch: function() {
    return execSync('git branch | grep \* | cut -d \' \' -f2');
  },

  node: function() {
    return execSync('node --version');
  }
}

const Base64 = {_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/++[++^A-Za-z0-9+/=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}

describe('dbInit', function() {
  it('successfully initializes', async function() {
    const res = await requestPromise({
      url: 'http://localhost/agency',
      auth: {
        bearer: "." + Base64.encode("{\"scope\": \"admin:all test:all\"}") + ".",
      },
      method: 'GET',
      json: true,
      resolveWithFullResponse: true
    })
    assert.strictEqual(res.statusCode, 200)
    assert.strictEqual(res.headers['content-type'], 'application/json; charset=utf-8');
    assert.strictEqual(res.headers['server'], 'istio-envoy');
    assert.strictEqual(res.body.name, "@container-images/mds-agency");
    assert.strictEqual(res.body.version, "0.1.14")
    // expect(res.body.build.date).eq("2019-09-20T00:15:25.778Z");
    // expect(res.body.build.branch).eq(environment.branch());
    // expect(res.body.build.commit).eq("commit", environment.commit())
    assert.strictEqual(`v${res.body.node}`, environment.node().toString().trim());
    assert.strictEqual(res.body.status, "Running");
    // expect(res.body).to.deep.eq({"name":"@container-images/mds-agency","version":"0.1.9","build":{"date":"2019-09-20T00:15:25.778Z","branch":environment.branch(),"commit":environment.commit()},"node":environment.node(),"status":"Running"});
  })
})
