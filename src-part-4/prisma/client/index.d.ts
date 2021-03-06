// Code generated by Prisma (prisma@1.28.3). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  author: (where?: AuthorWhereInput) => Promise<boolean>;
  book: (where?: BookWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  author: (where: AuthorWhereUniqueInput) => AuthorPromise;
  authors: (
    args?: {
      where?: AuthorWhereInput;
      orderBy?: AuthorOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Author>;
  authorsConnection: (
    args?: {
      where?: AuthorWhereInput;
      orderBy?: AuthorOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => AuthorConnectionPromise;
  book: (where: BookWhereUniqueInput) => BookPromise;
  books: (
    args?: {
      where?: BookWhereInput;
      orderBy?: BookOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Book>;
  booksConnection: (
    args?: {
      where?: BookWhereInput;
      orderBy?: BookOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => BookConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserPromise;
  users: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<User>;
  usersConnection: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createAuthor: (data: AuthorCreateInput) => AuthorPromise;
  updateAuthor: (
    args: { data: AuthorUpdateInput; where: AuthorWhereUniqueInput }
  ) => AuthorPromise;
  updateManyAuthors: (
    args: { data: AuthorUpdateManyMutationInput; where?: AuthorWhereInput }
  ) => BatchPayloadPromise;
  upsertAuthor: (
    args: {
      where: AuthorWhereUniqueInput;
      create: AuthorCreateInput;
      update: AuthorUpdateInput;
    }
  ) => AuthorPromise;
  deleteAuthor: (where: AuthorWhereUniqueInput) => AuthorPromise;
  deleteManyAuthors: (where?: AuthorWhereInput) => BatchPayloadPromise;
  createBook: (data: BookCreateInput) => BookPromise;
  updateBook: (
    args: { data: BookUpdateInput; where: BookWhereUniqueInput }
  ) => BookPromise;
  updateManyBooks: (
    args: { data: BookUpdateManyMutationInput; where?: BookWhereInput }
  ) => BatchPayloadPromise;
  upsertBook: (
    args: {
      where: BookWhereUniqueInput;
      create: BookCreateInput;
      update: BookUpdateInput;
    }
  ) => BookPromise;
  deleteBook: (where: BookWhereUniqueInput) => BookPromise;
  deleteManyBooks: (where?: BookWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (
    args: { data: UserUpdateInput; where: UserWhereUniqueInput }
  ) => UserPromise;
  updateManyUsers: (
    args: { data: UserUpdateManyMutationInput; where?: UserWhereInput }
  ) => BatchPayloadPromise;
  upsertUser: (
    args: {
      where: UserWhereUniqueInput;
      create: UserCreateInput;
      update: UserUpdateInput;
    }
  ) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  author: (
    where?: AuthorSubscriptionWhereInput
  ) => AuthorSubscriptionPayloadSubscription;
  book: (
    where?: BookSubscriptionWhereInput
  ) => BookSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type BookOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "title_ASC"
  | "title_DESC"
  | "pages_ASC"
  | "pages_DESC"
  | "chapters_ASC"
  | "chapters_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type AuthorOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "email_ASC"
  | "email_DESC"
  | "password_ASC"
  | "password_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface BookUpdateWithoutAuthorsDataInput {
  title?: String;
  pages?: Int;
  chapters?: Int;
}

export type AuthorWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  name?: String;
}>;

export interface BookUpdateManyWithWhereNestedInput {
  where: BookScalarWhereInput;
  data: BookUpdateManyDataInput;
}

export interface AuthorWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  books_every?: BookWhereInput;
  books_some?: BookWhereInput;
  books_none?: BookWhereInput;
  AND?: AuthorWhereInput[] | AuthorWhereInput;
  OR?: AuthorWhereInput[] | AuthorWhereInput;
  NOT?: AuthorWhereInput[] | AuthorWhereInput;
}

export interface AuthorUpdateWithWhereUniqueWithoutBooksInput {
  where: AuthorWhereUniqueInput;
  data: AuthorUpdateWithoutBooksDataInput;
}

export interface BookCreateInput {
  title: String;
  pages?: Int;
  chapters?: Int;
  authors?: AuthorCreateManyWithoutBooksInput;
}

export interface BookUpdateManyDataInput {
  title?: String;
  pages?: Int;
  chapters?: Int;
}

export interface BookSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: BookWhereInput;
  AND?: BookSubscriptionWhereInput[] | BookSubscriptionWhereInput;
  OR?: BookSubscriptionWhereInput[] | BookSubscriptionWhereInput;
  NOT?: BookSubscriptionWhereInput[] | BookSubscriptionWhereInput;
}

export interface AuthorCreateInput {
  name: String;
  books?: BookCreateManyWithoutAuthorsInput;
}

export interface UserUpdateManyMutationInput {
  name?: String;
  email?: String;
  password?: String;
}

export interface BookCreateManyWithoutAuthorsInput {
  create?: BookCreateWithoutAuthorsInput[] | BookCreateWithoutAuthorsInput;
  connect?: BookWhereUniqueInput[] | BookWhereUniqueInput;
}

export type BookWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface BookCreateWithoutAuthorsInput {
  title: String;
  pages?: Int;
  chapters?: Int;
}

export interface BookUpdateManyMutationInput {
  title?: String;
  pages?: Int;
  chapters?: Int;
}

export interface AuthorUpdateInput {
  name?: String;
  books?: BookUpdateManyWithoutAuthorsInput;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  email?: String;
}>;

export interface BookUpdateManyWithoutAuthorsInput {
  create?: BookCreateWithoutAuthorsInput[] | BookCreateWithoutAuthorsInput;
  delete?: BookWhereUniqueInput[] | BookWhereUniqueInput;
  connect?: BookWhereUniqueInput[] | BookWhereUniqueInput;
  set?: BookWhereUniqueInput[] | BookWhereUniqueInput;
  disconnect?: BookWhereUniqueInput[] | BookWhereUniqueInput;
  update?:
    | BookUpdateWithWhereUniqueWithoutAuthorsInput[]
    | BookUpdateWithWhereUniqueWithoutAuthorsInput;
  upsert?:
    | BookUpsertWithWhereUniqueWithoutAuthorsInput[]
    | BookUpsertWithWhereUniqueWithoutAuthorsInput;
  deleteMany?: BookScalarWhereInput[] | BookScalarWhereInput;
  updateMany?:
    | BookUpdateManyWithWhereNestedInput[]
    | BookUpdateManyWithWhereNestedInput;
}

export interface UserWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  email?: String;
  email_not?: String;
  email_in?: String[] | String;
  email_not_in?: String[] | String;
  email_lt?: String;
  email_lte?: String;
  email_gt?: String;
  email_gte?: String;
  email_contains?: String;
  email_not_contains?: String;
  email_starts_with?: String;
  email_not_starts_with?: String;
  email_ends_with?: String;
  email_not_ends_with?: String;
  password?: String;
  password_not?: String;
  password_in?: String[] | String;
  password_not_in?: String[] | String;
  password_lt?: String;
  password_lte?: String;
  password_gt?: String;
  password_gte?: String;
  password_contains?: String;
  password_not_contains?: String;
  password_starts_with?: String;
  password_not_starts_with?: String;
  password_ends_with?: String;
  password_not_ends_with?: String;
  AND?: UserWhereInput[] | UserWhereInput;
  OR?: UserWhereInput[] | UserWhereInput;
  NOT?: UserWhereInput[] | UserWhereInput;
}

export interface BookUpdateWithWhereUniqueWithoutAuthorsInput {
  where: BookWhereUniqueInput;
  data: BookUpdateWithoutAuthorsDataInput;
}

export interface AuthorUpsertWithWhereUniqueWithoutBooksInput {
  where: AuthorWhereUniqueInput;
  update: AuthorUpdateWithoutBooksDataInput;
  create: AuthorCreateWithoutBooksInput;
}

export interface AuthorUpdateManyWithoutBooksInput {
  create?: AuthorCreateWithoutBooksInput[] | AuthorCreateWithoutBooksInput;
  delete?: AuthorWhereUniqueInput[] | AuthorWhereUniqueInput;
  connect?: AuthorWhereUniqueInput[] | AuthorWhereUniqueInput;
  set?: AuthorWhereUniqueInput[] | AuthorWhereUniqueInput;
  disconnect?: AuthorWhereUniqueInput[] | AuthorWhereUniqueInput;
  update?:
    | AuthorUpdateWithWhereUniqueWithoutBooksInput[]
    | AuthorUpdateWithWhereUniqueWithoutBooksInput;
  upsert?:
    | AuthorUpsertWithWhereUniqueWithoutBooksInput[]
    | AuthorUpsertWithWhereUniqueWithoutBooksInput;
  deleteMany?: AuthorScalarWhereInput[] | AuthorScalarWhereInput;
  updateMany?:
    | AuthorUpdateManyWithWhereNestedInput[]
    | AuthorUpdateManyWithWhereNestedInput;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UserWhereInput;
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
}

export interface BookUpsertWithWhereUniqueWithoutAuthorsInput {
  where: BookWhereUniqueInput;
  update: BookUpdateWithoutAuthorsDataInput;
  create: BookCreateWithoutAuthorsInput;
}

export interface UserUpdateInput {
  name?: String;
  email?: String;
  password?: String;
}

export interface BookScalarWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  title?: String;
  title_not?: String;
  title_in?: String[] | String;
  title_not_in?: String[] | String;
  title_lt?: String;
  title_lte?: String;
  title_gt?: String;
  title_gte?: String;
  title_contains?: String;
  title_not_contains?: String;
  title_starts_with?: String;
  title_not_starts_with?: String;
  title_ends_with?: String;
  title_not_ends_with?: String;
  pages?: Int;
  pages_not?: Int;
  pages_in?: Int[] | Int;
  pages_not_in?: Int[] | Int;
  pages_lt?: Int;
  pages_lte?: Int;
  pages_gt?: Int;
  pages_gte?: Int;
  chapters?: Int;
  chapters_not?: Int;
  chapters_in?: Int[] | Int;
  chapters_not_in?: Int[] | Int;
  chapters_lt?: Int;
  chapters_lte?: Int;
  chapters_gt?: Int;
  chapters_gte?: Int;
  AND?: BookScalarWhereInput[] | BookScalarWhereInput;
  OR?: BookScalarWhereInput[] | BookScalarWhereInput;
  NOT?: BookScalarWhereInput[] | BookScalarWhereInput;
}

export interface AuthorUpdateManyDataInput {
  name?: String;
}

export interface BookUpdateInput {
  title?: String;
  pages?: Int;
  chapters?: Int;
  authors?: AuthorUpdateManyWithoutBooksInput;
}

export interface AuthorScalarWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  AND?: AuthorScalarWhereInput[] | AuthorScalarWhereInput;
  OR?: AuthorScalarWhereInput[] | AuthorScalarWhereInput;
  NOT?: AuthorScalarWhereInput[] | AuthorScalarWhereInput;
}

export interface AuthorCreateManyWithoutBooksInput {
  create?: AuthorCreateWithoutBooksInput[] | AuthorCreateWithoutBooksInput;
  connect?: AuthorWhereUniqueInput[] | AuthorWhereUniqueInput;
}

export interface AuthorCreateWithoutBooksInput {
  name: String;
}

export interface AuthorUpdateManyMutationInput {
  name?: String;
}

export interface BookWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  title?: String;
  title_not?: String;
  title_in?: String[] | String;
  title_not_in?: String[] | String;
  title_lt?: String;
  title_lte?: String;
  title_gt?: String;
  title_gte?: String;
  title_contains?: String;
  title_not_contains?: String;
  title_starts_with?: String;
  title_not_starts_with?: String;
  title_ends_with?: String;
  title_not_ends_with?: String;
  pages?: Int;
  pages_not?: Int;
  pages_in?: Int[] | Int;
  pages_not_in?: Int[] | Int;
  pages_lt?: Int;
  pages_lte?: Int;
  pages_gt?: Int;
  pages_gte?: Int;
  chapters?: Int;
  chapters_not?: Int;
  chapters_in?: Int[] | Int;
  chapters_not_in?: Int[] | Int;
  chapters_lt?: Int;
  chapters_lte?: Int;
  chapters_gt?: Int;
  chapters_gte?: Int;
  authors_every?: AuthorWhereInput;
  authors_some?: AuthorWhereInput;
  authors_none?: AuthorWhereInput;
  AND?: BookWhereInput[] | BookWhereInput;
  OR?: BookWhereInput[] | BookWhereInput;
  NOT?: BookWhereInput[] | BookWhereInput;
}

export interface AuthorUpdateWithoutBooksDataInput {
  name?: String;
}

export interface AuthorUpdateManyWithWhereNestedInput {
  where: AuthorScalarWhereInput;
  data: AuthorUpdateManyDataInput;
}

export interface UserCreateInput {
  name: String;
  email: String;
  password: String;
}

export interface AuthorSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: AuthorWhereInput;
  AND?: AuthorSubscriptionWhereInput[] | AuthorSubscriptionWhereInput;
  OR?: AuthorSubscriptionWhereInput[] | AuthorSubscriptionWhereInput;
  NOT?: AuthorSubscriptionWhereInput[] | AuthorSubscriptionWhereInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface UserPreviousValues {
  id: ID_Output;
  name: String;
  email: String;
  password: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
}

export interface AggregateAuthor {
  count: Int;
}

export interface AggregateAuthorPromise
  extends Promise<AggregateAuthor>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateAuthorSubscription
  extends Promise<AsyncIterator<AggregateAuthor>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface Book {
  id: ID_Output;
  title: String;
  pages?: Int;
  chapters?: Int;
}

export interface BookPromise extends Promise<Book>, Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  pages: () => Promise<Int>;
  chapters: () => Promise<Int>;
  authors: <T = FragmentableArray<Author>>(
    args?: {
      where?: AuthorWhereInput;
      orderBy?: AuthorOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface BookSubscription
  extends Promise<AsyncIterator<Book>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  pages: () => Promise<AsyncIterator<Int>>;
  chapters: () => Promise<AsyncIterator<Int>>;
  authors: <T = Promise<AsyncIterator<AuthorSubscription>>>(
    args?: {
      where?: AuthorWhereInput;
      orderBy?: AuthorOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface BookConnection {
  pageInfo: PageInfo;
  edges: BookEdge[];
}

export interface BookConnectionPromise
  extends Promise<BookConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<BookEdge>>() => T;
  aggregate: <T = AggregateBookPromise>() => T;
}

export interface BookConnectionSubscription
  extends Promise<AsyncIterator<BookConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<BookEdgeSubscription>>>() => T;
  aggregate: <T = AggregateBookSubscription>() => T;
}

export interface BookSubscriptionPayload {
  mutation: MutationType;
  node: Book;
  updatedFields: String[];
  previousValues: BookPreviousValues;
}

export interface BookSubscriptionPayloadPromise
  extends Promise<BookSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = BookPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = BookPreviousValuesPromise>() => T;
}

export interface BookSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<BookSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = BookSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = BookPreviousValuesSubscription>() => T;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface AuthorEdge {
  node: Author;
  cursor: String;
}

export interface AuthorEdgePromise extends Promise<AuthorEdge>, Fragmentable {
  node: <T = AuthorPromise>() => T;
  cursor: () => Promise<String>;
}

export interface AuthorEdgeSubscription
  extends Promise<AsyncIterator<AuthorEdge>>,
    Fragmentable {
  node: <T = AuthorSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AuthorConnection {
  pageInfo: PageInfo;
  edges: AuthorEdge[];
}

export interface AuthorConnectionPromise
  extends Promise<AuthorConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<AuthorEdge>>() => T;
  aggregate: <T = AggregateAuthorPromise>() => T;
}

export interface AuthorConnectionSubscription
  extends Promise<AsyncIterator<AuthorConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<AuthorEdgeSubscription>>>() => T;
  aggregate: <T = AggregateAuthorSubscription>() => T;
}

export interface Author {
  id: ID_Output;
  name: String;
}

export interface AuthorPromise extends Promise<Author>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  books: <T = FragmentableArray<Book>>(
    args?: {
      where?: BookWhereInput;
      orderBy?: BookOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface AuthorSubscription
  extends Promise<AsyncIterator<Author>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  books: <T = Promise<AsyncIterator<BookSubscription>>>(
    args?: {
      where?: BookWhereInput;
      orderBy?: BookOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface AggregateBook {
  count: Int;
}

export interface AggregateBookPromise
  extends Promise<AggregateBook>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateBookSubscription
  extends Promise<AsyncIterator<AggregateBook>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface AuthorPreviousValues {
  id: ID_Output;
  name: String;
}

export interface AuthorPreviousValuesPromise
  extends Promise<AuthorPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface AuthorPreviousValuesSubscription
  extends Promise<AsyncIterator<AuthorPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface AuthorSubscriptionPayload {
  mutation: MutationType;
  node: Author;
  updatedFields: String[];
  previousValues: AuthorPreviousValues;
}

export interface AuthorSubscriptionPayloadPromise
  extends Promise<AuthorSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = AuthorPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = AuthorPreviousValuesPromise>() => T;
}

export interface AuthorSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<AuthorSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = AuthorSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = AuthorPreviousValuesSubscription>() => T;
}

export interface BookPreviousValues {
  id: ID_Output;
  title: String;
  pages?: Int;
  chapters?: Int;
}

export interface BookPreviousValuesPromise
  extends Promise<BookPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  pages: () => Promise<Int>;
  chapters: () => Promise<Int>;
}

export interface BookPreviousValuesSubscription
  extends Promise<AsyncIterator<BookPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  pages: () => Promise<AsyncIterator<Int>>;
  chapters: () => Promise<AsyncIterator<Int>>;
}

export interface BookEdge {
  node: Book;
  cursor: String;
}

export interface BookEdgePromise extends Promise<BookEdge>, Fragmentable {
  node: <T = BookPromise>() => T;
  cursor: () => Promise<String>;
}

export interface BookEdgeSubscription
  extends Promise<AsyncIterator<BookEdge>>,
    Fragmentable {
  node: <T = BookSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface User {
  id: ID_Output;
  name: String;
  email: String;
  password: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export type Long = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Book",
    embedded: false
  },
  {
    name: "Author",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
