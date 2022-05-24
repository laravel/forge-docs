---
canonicalUrl: 'https://forge.laravel.com/docs/1.0/accounts/your-account.html'
---
# Your Account

[[toc]]

## User Account

### Updating Your Profile Information

You may update your name, email, and password from Forge's [Authentication dashboard](https://forge.laravel.com/user-profile/authentication) within your user profile.

### Securing Your Account With Two Factor Authentication

You may add additional security to your user account by setting up Two Factor Authentication (2FA) via Forge's [Authentication dashboard](https://forge.laravel.com/user-profile/authentication). Once you enable 2FA, please remember to scan the 2FA barcode into your authentication app, such as [Google Authenticator](https://support.google.com/accounts/answer/1066447).

When enabling 2FA, Forge will display:

- A QR code to can with your authentication app
- A security code (if you can't scan the QR code)
- Several recovery codes

The recovery codes should be stored securely and can be used if you no longer have access to your 2FA device, thus it is recommended to not store your recovery codes exclusively on the device that you use for 2FA. Each recovery code can only be used once. You may re-generate the recovery codes at any time from your account's dashboard.

If you have configured 2FA on your account and lose access to your it and your recovery codes, you will need to email [forge@laravel.com](mailto:forge@laravel.com) to reset it by confirming your identity.

:::tip Using 2FA

We recommend using the [Google Authenticator](https://support.google.com/accounts/answer/1066447) application on your smartphone to manage your Forge 2FA configuration.
:::

### Managing Authenticated Sessions

To improve your account security, we allow you to view and logout any active sessions for your user account via the [Authentication dashboard](https://forge.laravel.com/user-profile/authentication). This is particularly useful if you forgot to logout on a device you no longer have access to.

### Deleting Your Account

You can delete your account at any time from the [Authentication dashboard](https://forge.laravel.com/user-profile/authentication).

:::danger Account Data

Deleting your account will cancel your subscription and delete all of your account's data. **Your data, including billing information, will not be recoverable**; however, your servers will not be deleted from your connected server providers.
:::

### Sharing Your Account's Servers With Other Users

If you need to allow other users to help manage the servers in your Forge account, you can create a [Circle](/1.0/accounts/circles.html).

## Billing

### Receiving Invoices via Email

Specifying the email addresses you would like to receive new invoices can be done in Forge's [Billing Management](https://forge.laravel.com/billing) page. You may specify several email addresses by providing a comma separated list.

### Accessing Previous Invoices

The [Billing Management](https://forge.laravel.com/billing) page list all previous invoices for you account.

### Business Receipts

If you need to add specific contact or tax information to your receipts such as your full business name, VAT / tax identification number, or address of record, you can add this extra billing information on the [Billing Management](https://forge.laravel.com/billing) page in your account. We'll make sure this information is displayed on every receipt.

### Downgrading To The Hobby Plan

If you wish to downgrade to the Hobby plan, please contact support at [forge@laravel.com](mailto:forge@laravel.com). You must have only one server (including archived servers) before submitting a request to downgrade to the Hobby plan.
