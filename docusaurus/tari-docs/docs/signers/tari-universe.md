---
sidebar_position: 2
---

# Tari Universe signer

This signer is designed for building Tari Universe apps.

## Install required dependencies

```bash npm2yarn
npm install @tari-project/tari-universe-signer @tari-project/tari-permissions
```

## Establish the connection

```js
import { TariPermissions } from "@tari-project/tari-permissions";
import { TariUniverseSigner } from "@tari-project/tari-universe-signer";

const permissions = new TariPermissions().addPermission("Admin");
const optionalPermissions = new TariPermissions();
const signer = new TariUniverseSigner({
  permissions,
  optionalPermissions,
});
```
