Share and record your screen in the browser

- Download Firefox Nightly and once installed visit `about:config`

  - Look for `dom.moduleScripts.enabled` and set it to `true`
  - Look for `media.getusermedia.screensharing.allowed_domains` and add your custom domain


- Generate local certificate with:

```shell
openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem
```

- Start a local server with:

```shell
[sudo] npm start
```

or

```shell
[sudo] PATH_TO_NODE server.js
```
