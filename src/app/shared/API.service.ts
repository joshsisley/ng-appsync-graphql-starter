/* tslint:disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateClientInput = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string | null;
  cognitoId?: string | null;
  status?: string | null;
};

export type UpdateClientInput = {
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phone?: string | null;
  cognitoId?: string | null;
  status?: string | null;
};

export type DeleteClientInput = {
  id: string;
};

export type TableClientFilterInput = {
  id?: TableStringFilterInput | null;
  firstName?: TableStringFilterInput | null;
  lastName?: TableStringFilterInput | null;
  email?: TableStringFilterInput | null;
  phone?: TableStringFilterInput | null;
  cognitoId?: TableStringFilterInput | null;
  status?: TableStringFilterInput | null;
};

export type TableStringFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type CreateClientMutation = {
  __typename: "Client";
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string | null;
  cognitoId: string | null;
  status: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateClientMutation = {
  __typename: "Client";
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string | null;
  cognitoId: string | null;
  status: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteClientMutation = {
  __typename: "Client";
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string | null;
  cognitoId: string | null;
  status: string | null;
  createdAt: string;
  updatedAt: string;
};

export type GetClientQuery = {
  __typename: "Client";
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string | null;
  cognitoId: string | null;
  status: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListClientsQuery = {
  __typename: "ClientConnection";
  items: Array<{
    __typename: "Client";
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string | null;
    cognitoId: string | null;
    status: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateClientSubscription = {
  __typename: "Client";
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string | null;
  cognitoId: string | null;
  status: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateClientSubscription = {
  __typename: "Client";
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string | null;
  cognitoId: string | null;
  status: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteClientSubscription = {
  __typename: "Client";
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string | null;
  cognitoId: string | null;
  status: string | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateClient(input: CreateClientInput): Promise<CreateClientMutation> {
    const statement = `mutation CreateClient($input: CreateClientInput!) {
        createClient(input: $input) {
          __typename
          id
          firstName
          lastName
          email
          phone
          cognitoId
          status
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateClientMutation>response.data.createClient;
  }
  async UpdateClient(input: UpdateClientInput): Promise<UpdateClientMutation> {
    const statement = `mutation UpdateClient($input: UpdateClientInput!) {
        updateClient(input: $input) {
          __typename
          id
          firstName
          lastName
          email
          phone
          cognitoId
          status
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateClientMutation>response.data.updateClient;
  }
  async DeleteClient(input: DeleteClientInput): Promise<DeleteClientMutation> {
    const statement = `mutation DeleteClient($input: DeleteClientInput!) {
        deleteClient(input: $input) {
          __typename
          id
          firstName
          lastName
          email
          phone
          cognitoId
          status
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteClientMutation>response.data.deleteClient;
  }
  async GetClient(id: string): Promise<GetClientQuery> {
    const statement = `query GetClient($id: String!) {
        getClient(id: $id) {
          __typename
          id
          firstName
          lastName
          email
          phone
          cognitoId
          status
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetClientQuery>response.data.getClient;
  }
  async ListClients(
    filter?: TableClientFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListClientsQuery> {
    const statement = `query ListClients($filter: TableClientFilterInput, $limit: Int, $nextToken: String) {
        listClients(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            firstName
            lastName
            email
            phone
            cognitoId
            status
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListClientsQuery>response.data.listClients;
  }
  OnCreateClientListener: Observable<OnCreateClientSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateClient($id: String, $firstName: String, $lastName: String, $email: String, $phone: String) {
        onCreateClient(id: $id, firstName: $firstName, lastName: $lastName, email: $email, phone: $phone) {
          __typename
          id
          firstName
          lastName
          email
          phone
          cognitoId
          status
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateClientSubscription>;

  OnUpdateClientListener: Observable<OnUpdateClientSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateClient($id: String, $firstName: String, $lastName: String, $email: String, $phone: String) {
        onUpdateClient(id: $id, firstName: $firstName, lastName: $lastName, email: $email, phone: $phone) {
          __typename
          id
          firstName
          lastName
          email
          phone
          cognitoId
          status
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateClientSubscription>;

  OnDeleteClientListener: Observable<OnDeleteClientSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteClient($id: String, $firstName: String, $lastName: String, $email: String, $phone: String) {
        onDeleteClient(id: $id, firstName: $firstName, lastName: $lastName, email: $email, phone: $phone) {
          __typename
          id
          firstName
          lastName
          email
          phone
          cognitoId
          status
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteClientSubscription>;
}
