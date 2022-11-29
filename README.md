## esa-slack-notification

This is the program that subscribe the articles posted by certain people that I like on [esa](https://esa.io/).

## Directory Structure

The architecture is based on the MVC + Repository pattern.

```
.
├── appsscript.json
├── controller
│   ├── esa-controller.ts
│   └── slack-controller.ts
├── main.ts
├── model
│   └── post-model.ts
├── provider.ts
└── repository
    ├── esa
    │   ├── dto
    │   │   ├── created-by.ts
    │   │   ├── get-all-posts-response.ts
    │   │   ├── pagination.ts
    │   │   ├── post-dto.ts
    │   │   └── updated-by.ts
    │   ├── model
    │   │   └── get-all-posts-request.ts
    │   └── esa-repository.ts
    ├── incomming-webhook
    │   ├── incoming-webhook-repository.ts
    │   └── model
    │       ├── action-block.ts
    │       ├── button-element.ts
    │       ├── content-block.ts
    │       ├── divider-block.ts
    │       ├── file-block.ts
    │       ├── header-block.ts
    │       ├── image-element.ts
    │       ├── section-block.ts
    │       └── text-object.ts
    └── property
        └── property-repository.ts

9 directories, 23 files
```

## Example of the Notification
You can send a notification wherever you want on Slack.(Your own sandbox environment is recommended.)

![スクリーンショット 2022-11-25 18 24 44](https://user-images.githubusercontent.com/104049111/203946138-798bc1ca-d119-4ea1-999d-c5171a43bd4f.png)
