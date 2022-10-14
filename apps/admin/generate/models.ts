export const models = [
  {
    name: "Post",
    dbName: null,
    fields: [
      {
        name: "id",
        kind: "scalar",
        isList: false,
        isRequired: true,
        isUnique: false,
        isId: true,
        isReadOnly: false,
        hasDefaultValue: true,
        type: "Int",
        default: {
          name: "autoincrement",
          args: [],
        },
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "categoryId",
        kind: "scalar",
        isList: false,
        isRequired: false,
        isUnique: false,
        isId: false,
        isReadOnly: true,
        hasDefaultValue: false,
        type: "Int",
        isGenerated: false,
        isUpdatedAt: false,
        documentation: "dasdfas",
      },
      {
        name: "userId",
        kind: "scalar",
        isList: false,
        isRequired: true,
        isUnique: false,
        isId: false,
        isReadOnly: true,
        hasDefaultValue: false,
        type: "String",
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "text",
        kind: "scalar",
        isList: false,
        isRequired: true,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "String",
        isGenerated: false,
        isUpdatedAt: false,
        documentation: "@owner(test)",
      },
      {
        name: "createdAt",
        kind: "scalar",
        isList: false,
        isRequired: true,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: true,
        type: "DateTime",
        default: {
          name: "now",
          args: [],
        },
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "updatedAt",
        kind: "scalar",
        isList: false,
        isRequired: false,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "DateTime",
        isGenerated: false,
        isUpdatedAt: true,
      },
      {
        name: "user",
        kind: "object",
        isList: false,
        isRequired: true,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "User",
        relationName: "PostToUser",
        relationFromFields: ["userId"],
        relationToFields: ["id"],
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "tags",
        kind: "object",
        isList: true,
        isRequired: true,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "Tag",
        relationName: "PostToTag",
        relationFromFields: [],
        relationToFields: ["id"],
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "category",
        kind: "object",
        isList: false,
        isRequired: false,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "Category",
        relationName: "CategoryToPost",
        relationFromFields: ["categoryId"],
        relationToFields: ["id"],
        relationOnDelete: "NoAction",
        isGenerated: false,
        isUpdatedAt: false,
      },
    ],
    primaryKey: null,
    uniqueFields: [],
    uniqueIndexes: [],
    isGenerated: false,
  },
  {
    name: "Tag",
    dbName: null,
    fields: [
      {
        name: "id",
        kind: "scalar",
        isList: false,
        isRequired: true,
        isUnique: false,
        isId: true,
        isReadOnly: false,
        hasDefaultValue: true,
        type: "Int",
        default: {
          name: "autoincrement",
          args: [],
        },
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "name",
        kind: "scalar",
        isList: false,
        isRequired: true,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "String",
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "createdAt",
        kind: "scalar",
        isList: false,
        isRequired: true,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: true,
        type: "DateTime",
        default: {
          name: "now",
          args: [],
        },
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "updatedAt",
        kind: "scalar",
        isList: false,
        isRequired: false,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "DateTime",
        isGenerated: false,
        isUpdatedAt: true,
      },
      {
        name: "posts",
        kind: "object",
        isList: true,
        isRequired: true,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "Post",
        relationName: "PostToTag",
        relationFromFields: [],
        relationToFields: ["id"],
        isGenerated: false,
        isUpdatedAt: false,
      },
    ],
    primaryKey: null,
    uniqueFields: [],
    uniqueIndexes: [],
    isGenerated: false,
  },
  {
    name: "Category",
    dbName: null,
    fields: [
      {
        name: "id",
        kind: "scalar",
        isList: false,
        isRequired: true,
        isUnique: false,
        isId: true,
        isReadOnly: false,
        hasDefaultValue: true,
        type: "Int",
        default: {
          name: "autoincrement",
          args: [],
        },
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "name",
        kind: "scalar",
        isList: false,
        isRequired: true,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "String",
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "parentCategoryId",
        kind: "scalar",
        isList: false,
        isRequired: false,
        isUnique: false,
        isId: false,
        isReadOnly: true,
        hasDefaultValue: false,
        type: "Int",
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "createdAt",
        kind: "scalar",
        isList: false,
        isRequired: true,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: true,
        type: "DateTime",
        default: {
          name: "now",
          args: [],
        },
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "updatedAt",
        kind: "scalar",
        isList: false,
        isRequired: false,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "DateTime",
        isGenerated: false,
        isUpdatedAt: true,
      },
      {
        name: "childrenCategories",
        kind: "object",
        isList: true,
        isRequired: true,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "Category",
        relationName: "SubCategories",
        relationFromFields: [],
        relationToFields: [],
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "parentCategory",
        kind: "object",
        isList: false,
        isRequired: false,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "Category",
        relationName: "SubCategories",
        relationFromFields: ["parentCategoryId"],
        relationToFields: ["id"],
        relationOnDelete: "NoAction",
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "Post",
        kind: "object",
        isList: true,
        isRequired: true,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "Post",
        relationName: "CategoryToPost",
        relationFromFields: [],
        relationToFields: [],
        isGenerated: false,
        isUpdatedAt: false,
      },
    ],
    primaryKey: null,
    uniqueFields: [],
    uniqueIndexes: [],
    isGenerated: false,
  },
  {
    name: "Account",
    dbName: null,
    fields: [
      {
        name: "id",
        kind: "scalar",
        isList: false,
        isRequired: true,
        isUnique: false,
        isId: true,
        isReadOnly: false,
        hasDefaultValue: true,
        type: "String",
        default: {
          name: "cuid",
          args: [],
        },
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "userId",
        kind: "scalar",
        isList: false,
        isRequired: true,
        isUnique: false,
        isId: false,
        isReadOnly: true,
        hasDefaultValue: false,
        type: "String",
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "type",
        kind: "scalar",
        isList: false,
        isRequired: true,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "String",
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "provider",
        kind: "scalar",
        isList: false,
        isRequired: true,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "String",
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "providerAccountId",
        kind: "scalar",
        isList: false,
        isRequired: true,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "String",
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "refresh_token",
        kind: "scalar",
        isList: false,
        isRequired: false,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "String",
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "access_token",
        kind: "scalar",
        isList: false,
        isRequired: false,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "String",
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "expires_at",
        kind: "scalar",
        isList: false,
        isRequired: false,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "Int",
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "token_type",
        kind: "scalar",
        isList: false,
        isRequired: false,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "String",
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "scope",
        kind: "scalar",
        isList: false,
        isRequired: false,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "String",
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "id_token",
        kind: "scalar",
        isList: false,
        isRequired: false,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "String",
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "session_state",
        kind: "scalar",
        isList: false,
        isRequired: false,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "String",
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "user",
        kind: "object",
        isList: false,
        isRequired: true,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "User",
        relationName: "AccountToUser",
        relationFromFields: ["userId"],
        relationToFields: ["id"],
        relationOnDelete: "Cascade",
        isGenerated: false,
        isUpdatedAt: false,
      },
    ],
    primaryKey: null,
    uniqueFields: [["provider", "providerAccountId"]],
    uniqueIndexes: [
      {
        name: null,
        fields: ["provider", "providerAccountId"],
      },
    ],
    isGenerated: false,
  },
  {
    name: "Session",
    dbName: null,
    fields: [
      {
        name: "id",
        kind: "scalar",
        isList: false,
        isRequired: true,
        isUnique: false,
        isId: true,
        isReadOnly: false,
        hasDefaultValue: true,
        type: "String",
        default: {
          name: "cuid",
          args: [],
        },
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "sessionToken",
        kind: "scalar",
        isList: false,
        isRequired: true,
        isUnique: true,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "String",
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "userId",
        kind: "scalar",
        isList: false,
        isRequired: true,
        isUnique: false,
        isId: false,
        isReadOnly: true,
        hasDefaultValue: false,
        type: "String",
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "expires",
        kind: "scalar",
        isList: false,
        isRequired: true,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "DateTime",
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "user",
        kind: "object",
        isList: false,
        isRequired: true,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "User",
        relationName: "SessionToUser",
        relationFromFields: ["userId"],
        relationToFields: ["id"],
        relationOnDelete: "Cascade",
        isGenerated: false,
        isUpdatedAt: false,
      },
    ],
    primaryKey: null,
    uniqueFields: [],
    uniqueIndexes: [],
    isGenerated: false,
  },
  {
    name: "User",
    dbName: null,
    fields: [
      {
        name: "id",
        kind: "scalar",
        isList: false,
        isRequired: true,
        isUnique: false,
        isId: true,
        isReadOnly: false,
        hasDefaultValue: true,
        type: "String",
        default: {
          name: "cuid",
          args: [],
        },
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "name",
        kind: "scalar",
        isList: false,
        isRequired: false,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "String",
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "email",
        kind: "scalar",
        isList: false,
        isRequired: false,
        isUnique: true,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "String",
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "emailVerified",
        kind: "scalar",
        isList: false,
        isRequired: false,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "DateTime",
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "image",
        kind: "scalar",
        isList: false,
        isRequired: false,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "String",
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "createdAt",
        kind: "scalar",
        isList: false,
        isRequired: true,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: true,
        type: "DateTime",
        default: {
          name: "now",
          args: [],
        },
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "updatedAt",
        kind: "scalar",
        isList: false,
        isRequired: false,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "DateTime",
        isGenerated: false,
        isUpdatedAt: true,
      },
      {
        name: "post",
        kind: "object",
        isList: true,
        isRequired: true,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "Post",
        relationName: "PostToUser",
        relationFromFields: [],
        relationToFields: [],
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "accounts",
        kind: "object",
        isList: true,
        isRequired: true,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "Account",
        relationName: "AccountToUser",
        relationFromFields: [],
        relationToFields: [],
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "sessions",
        kind: "object",
        isList: true,
        isRequired: true,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "Session",
        relationName: "SessionToUser",
        relationFromFields: [],
        relationToFields: [],
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "settings",
        kind: "object",
        isList: false,
        isRequired: false,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "UserSettings",
        relationName: "UserToUserSettings",
        relationFromFields: [],
        relationToFields: [],
        isGenerated: false,
        isUpdatedAt: false,
      },
    ],
    primaryKey: null,
    uniqueFields: [],
    uniqueIndexes: [],
    isGenerated: false,
  },
  {
    name: "UserSettings",
    dbName: null,
    fields: [
      {
        name: "id",
        kind: "scalar",
        isList: false,
        isRequired: true,
        isUnique: false,
        isId: true,
        isReadOnly: false,
        hasDefaultValue: true,
        type: "String",
        default: {
          name: "cuid",
          args: [],
        },
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "userId",
        kind: "scalar",
        isList: false,
        isRequired: true,
        isUnique: true,
        isId: false,
        isReadOnly: true,
        hasDefaultValue: false,
        type: "String",
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "user",
        kind: "object",
        isList: false,
        isRequired: true,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "User",
        relationName: "UserToUserSettings",
        relationFromFields: ["userId"],
        relationToFields: ["id"],
        relationOnDelete: "Cascade",
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "language",
        kind: "scalar",
        isList: false,
        isRequired: true,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "String",
        isGenerated: false,
        isUpdatedAt: false,
      },
    ],
    primaryKey: null,
    uniqueFields: [],
    uniqueIndexes: [],
    isGenerated: false,
  },
  {
    name: "VerificationToken",
    dbName: null,
    fields: [
      {
        name: "identifier",
        kind: "scalar",
        isList: false,
        isRequired: true,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "String",
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "token",
        kind: "scalar",
        isList: false,
        isRequired: true,
        isUnique: true,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "String",
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "expires",
        kind: "scalar",
        isList: false,
        isRequired: true,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "DateTime",
        isGenerated: false,
        isUpdatedAt: false,
      },
    ],
    primaryKey: null,
    uniqueFields: [["identifier", "token"]],
    uniqueIndexes: [
      {
        name: null,
        fields: ["identifier", "token"],
      },
    ],
    isGenerated: false,
  },
  {
    name: "AdminAccount",
    dbName: null,
    fields: [
      {
        name: "id",
        kind: "scalar",
        isList: false,
        isRequired: true,
        isUnique: false,
        isId: true,
        isReadOnly: false,
        hasDefaultValue: true,
        type: "String",
        default: {
          name: "cuid",
          args: [],
        },
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "userId",
        kind: "scalar",
        isList: false,
        isRequired: true,
        isUnique: false,
        isId: false,
        isReadOnly: true,
        hasDefaultValue: false,
        type: "String",
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "type",
        kind: "scalar",
        isList: false,
        isRequired: true,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "String",
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "provider",
        kind: "scalar",
        isList: false,
        isRequired: true,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "String",
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "providerAccountId",
        kind: "scalar",
        isList: false,
        isRequired: true,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "String",
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "refresh_token",
        kind: "scalar",
        isList: false,
        isRequired: false,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "String",
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "access_token",
        kind: "scalar",
        isList: false,
        isRequired: false,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "String",
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "expires_at",
        kind: "scalar",
        isList: false,
        isRequired: false,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "Int",
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "token_type",
        kind: "scalar",
        isList: false,
        isRequired: false,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "String",
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "scope",
        kind: "scalar",
        isList: false,
        isRequired: false,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "String",
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "id_token",
        kind: "scalar",
        isList: false,
        isRequired: false,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "String",
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "session_state",
        kind: "scalar",
        isList: false,
        isRequired: false,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "String",
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "user",
        kind: "object",
        isList: false,
        isRequired: true,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "AdminUser",
        relationName: "AdminAccountToAdminUser",
        relationFromFields: ["userId"],
        relationToFields: ["id"],
        relationOnDelete: "Cascade",
        isGenerated: false,
        isUpdatedAt: false,
      },
    ],
    primaryKey: null,
    uniqueFields: [["provider", "providerAccountId"]],
    uniqueIndexes: [
      {
        name: null,
        fields: ["provider", "providerAccountId"],
      },
    ],
    isGenerated: false,
  },
  {
    name: "AdminSession",
    dbName: null,
    fields: [
      {
        name: "id",
        kind: "scalar",
        isList: false,
        isRequired: true,
        isUnique: false,
        isId: true,
        isReadOnly: false,
        hasDefaultValue: true,
        type: "String",
        default: {
          name: "cuid",
          args: [],
        },
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "sessionToken",
        kind: "scalar",
        isList: false,
        isRequired: true,
        isUnique: true,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "String",
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "userId",
        kind: "scalar",
        isList: false,
        isRequired: true,
        isUnique: false,
        isId: false,
        isReadOnly: true,
        hasDefaultValue: false,
        type: "String",
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "expires",
        kind: "scalar",
        isList: false,
        isRequired: true,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "DateTime",
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "user",
        kind: "object",
        isList: false,
        isRequired: true,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "AdminUser",
        relationName: "AdminSessionToAdminUser",
        relationFromFields: ["userId"],
        relationToFields: ["id"],
        relationOnDelete: "Cascade",
        isGenerated: false,
        isUpdatedAt: false,
      },
    ],
    primaryKey: null,
    uniqueFields: [],
    uniqueIndexes: [],
    isGenerated: false,
  },
  {
    name: "AdminUser",
    dbName: null,
    fields: [
      {
        name: "id",
        kind: "scalar",
        isList: false,
        isRequired: true,
        isUnique: false,
        isId: true,
        isReadOnly: false,
        hasDefaultValue: true,
        type: "String",
        default: {
          name: "cuid",
          args: [],
        },
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "name",
        kind: "scalar",
        isList: false,
        isRequired: false,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "String",
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "email",
        kind: "scalar",
        isList: false,
        isRequired: false,
        isUnique: true,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "String",
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "emailVerified",
        kind: "scalar",
        isList: false,
        isRequired: false,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "DateTime",
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "image",
        kind: "scalar",
        isList: false,
        isRequired: false,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "String",
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "role",
        kind: "enum",
        isList: false,
        isRequired: false,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "Role",
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "accounts",
        kind: "object",
        isList: true,
        isRequired: true,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "AdminAccount",
        relationName: "AdminAccountToAdminUser",
        relationFromFields: [],
        relationToFields: [],
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "sessions",
        kind: "object",
        isList: true,
        isRequired: true,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "AdminSession",
        relationName: "AdminSessionToAdminUser",
        relationFromFields: [],
        relationToFields: [],
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "audit",
        kind: "object",
        isList: true,
        isRequired: true,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "Audit",
        relationName: "AdminUserToAudit",
        relationFromFields: [],
        relationToFields: [],
        isGenerated: false,
        isUpdatedAt: false,
      },
    ],
    primaryKey: null,
    uniqueFields: [],
    uniqueIndexes: [],
    isGenerated: false,
  },
  {
    name: "AdminVerificationToken",
    dbName: null,
    fields: [
      {
        name: "identifier",
        kind: "scalar",
        isList: false,
        isRequired: true,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "String",
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "token",
        kind: "scalar",
        isList: false,
        isRequired: true,
        isUnique: true,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "String",
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "expires",
        kind: "scalar",
        isList: false,
        isRequired: true,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "DateTime",
        isGenerated: false,
        isUpdatedAt: false,
      },
    ],
    primaryKey: null,
    uniqueFields: [["identifier", "token"]],
    uniqueIndexes: [
      {
        name: null,
        fields: ["identifier", "token"],
      },
    ],
    isGenerated: false,
  },
  {
    name: "Audit",
    dbName: null,
    fields: [
      {
        name: "id",
        kind: "scalar",
        isList: false,
        isRequired: true,
        isUnique: false,
        isId: true,
        isReadOnly: false,
        hasDefaultValue: true,
        type: "String",
        default: {
          name: "cuid",
          args: [],
        },
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "date",
        kind: "scalar",
        isList: false,
        isRequired: true,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: true,
        type: "DateTime",
        default: {
          name: "now",
          args: [],
        },
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "resource",
        kind: "scalar",
        isList: false,
        isRequired: true,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "String",
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "action",
        kind: "scalar",
        isList: false,
        isRequired: true,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "String",
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "payload",
        kind: "scalar",
        isList: false,
        isRequired: false,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "Json",
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "authorId",
        kind: "scalar",
        isList: false,
        isRequired: false,
        isUnique: false,
        isId: false,
        isReadOnly: true,
        hasDefaultValue: false,
        type: "String",
        isGenerated: false,
        isUpdatedAt: false,
      },
      {
        name: "author",
        kind: "object",
        isList: false,
        isRequired: false,
        isUnique: false,
        isId: false,
        isReadOnly: false,
        hasDefaultValue: false,
        type: "AdminUser",
        relationName: "AdminUserToAudit",
        relationFromFields: ["authorId"],
        relationToFields: ["id"],
        relationOnDelete: "Cascade",
        isGenerated: false,
        isUpdatedAt: false,
      },
    ],
    primaryKey: null,
    uniqueFields: [],
    uniqueIndexes: [],
    isGenerated: false,
  },
];