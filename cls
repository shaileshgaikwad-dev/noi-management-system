[33mcommit d38071c7d2c1ad407a4837b5bff2e36a0c9f7468[m
Author: Shailesh Gaikwad <shailesh.gaikwad078@gmail.com>
Date:   Mon Oct 19 12:56:07 2026 +0530

    backend package.json changes

[1mdiff --git a/backend/package.json b/backend/package.json[m
[1mindex 6c7fd47..853d111 100644[m
[1m--- a/backend/package.json[m
[1m+++ b/backend/package.json[m
[36m@@ -4,7 +4,8 @@[m
   "description": "",[m
   "main": "index.js",[m
   "scripts": {[m
[31m-    "test": "echo \"Error: no test specified\" && exit 1"[m
[32m+[m[32m    "start": "node server.js",[m
[32m+[m[32m    "test": "vitest run"[m
   },[m
   "keywords": [],[m
   "author": "",[m
[36m@@ -29,5 +30,8 @@[m
     "react-markdown": "^10.1.0",[m
     "remark-gfm": "^4.0.1",[m
     "zod": "^4.6.5"[m
[32m+[m[32m  },[m
[32m+[m[32m  "devDependencies": {[m
[32m+[m[32m    "vitest": "^5.0.5"[m
   }[m
 }[m
