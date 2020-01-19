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
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type UpdateClientInput = {
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phone?: string | null;
  cognitoId?: string | null;
  status?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteClientInput = {
  id: string;
};

export type CreateOrgInput = {
  id: string;
  name: string;
  address1?: string | null;
  address2?: string | null;
  city?: string | null;
  state?: string | null;
  zip?: string | null;
};

export type UpdateOrgInput = {
  id: string;
  name?: string | null;
  address1?: string | null;
  address2?: string | null;
  city?: string | null;
  state?: string | null;
  zip?: string | null;
};

export type DeleteOrgInput = {
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

export type TableOrgFilterInput = {
  id?: TableStringFilterInput | null;
  name?: TableStringFilterInput | null;
  address1?: TableStringFilterInput | null;
  address2?: TableStringFilterInput | null;
  city?: TableStringFilterInput | null;
  state?: TableStringFilterInput | null;
  zip?: TableStringFilterInput | null;
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
  createdAt: string | null;
  updatedAt: string | null;
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
  createdAt: string | null;
  updatedAt: string | null;
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
  createdAt: string | null;
  updatedAt: string | null;
};

export type CreateOrgMutation = {
  __typename: "Org";
  id: string;
  name: string;
  address1: string | null;
  address2: string | null;
  city: string | null;
  state: string | null;
  zip: string | null;
};

export type UpdateOrgMutation = {
  __typename: "Org";
  id: string;
  name: string;
  address1: string | null;
  address2: string | null;
  city: string | null;
  state: string | null;
  zip: string | null;
};

export type DeleteOrgMutation = {
  __typename: "Org";
  id: string;
  name: string;
  address1: string | null;
  address2: string | null;
  city: string | null;
  state: string | null;
  zip: string | null;
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
  createdAt: string | null;
  updatedAt: string | null;
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
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetOrgQuery = {
  __typename: "Org";
  id: string;
  name: string;
  address1: string | null;
  address2: string | null;
  city: string | null;
  state: string | null;
  zip: string | null;
};

export type ListOrgsQuery = {
  __typename: "OrgConnection";
  items: Array<{
    __typename: "Org";
    id: string;
    name: string;
    address1: string | null;
    address2: string | null;
    city: string | null;
    state: string | null;
    zip: string | null;
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
  createdAt: string | null;
  updatedAt: string | null;
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
  createdAt: string | null;
  updatedAt: string | null;
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
  createdAt: string | null;
  updatedAt: string | null;
};

export type OnCreateOrgSubscription = {
  __typename: "Org";
  id: string;
  name: string;
  address1: string | null;
  address2: string | null;
  city: string | null;
  state: string | null;
  zip: string | null;
};

export type OnUpdateOrgSubscription = {
  __typename: "Org";
  id: string;
  name: string;
  address1: string | null;
  address2: string | null;
  city: string | null;
  state: string | null;
  zip: string | null;
};

export type OnDeleteOrgSubscription = {
  __typename: "Org";
  id: string;
  name: string;
  address1: string | null;
  address2: string | null;
  city: string | null;
  state: string | null;
  zip: string | null;
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
  async CreateOrg(input: CreateOrgInput): Promise<CreateOrgMutation> {
    const statement = `mutation CreateOrg($input: CreateOrgInput!) {
        createOrg(input: $input) {
          __typename
          id
          name
          address1
          address2
          city
          state
          zip
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateOrgMutation>response.data.createOrg;
  }
  async UpdateOrg(input: UpdateOrgInput): Promise<UpdateOrgMutation> {
    const statement = `mutation UpdateOrg($input: UpdateOrgInput!) {
        updateOrg(input: $input) {
          __typename
          id
          name
          address1
          address2
          city
          state
          zip
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateOrgMutation>response.data.updateOrg;
  }
  async DeleteOrg(input: DeleteOrgInput): Promise<DeleteOrgMutation> {
    const statement = `mutation DeleteOrg($input: DeleteOrgInput!) {
        deleteOrg(input: $input) {
          __typename
          id
          name
          address1
          address2
          city
          state
          zip
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteOrgMutation>response.data.deleteOrg;
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
  async GetOrg(id: string): Promise<GetOrgQuery> {
    const statement = `query GetOrg($id: String!) {
        getOrg(id: $id) {
          __typename
          id
          name
          address1
          address2
          city
          state
          zip
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetOrgQuery>response.data.getOrg;
  }
  async ListOrgs(
    filter?: TableOrgFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListOrgsQuery> {
    const statement = `query ListOrgs($filter: TableOrgFilterInput, $limit: Int, $nextToken: String) {
        listOrgs(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            address1
            address2
            city
            state
            zip
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
    return <ListOrgsQuery>response.data.listOrgs;
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

  OnCreateOrgListener: Observable<OnCreateOrgSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateOrg($id: String, $name: String, $address1: String, $address2: String, $city: String) {
        onCreateOrg(id: $id, name: $name, address1: $address1, address2: $address2, city: $city) {
          __typename
          id
          name
          address1
          address2
          city
          state
          zip
        }
      }`
    )
  ) as Observable<OnCreateOrgSubscription>;

  OnUpdateOrgListener: Observable<OnUpdateOrgSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateOrg($id: String, $name: String, $address1: String, $address2: String, $city: String) {
        onUpdateOrg(id: $id, name: $name, address1: $address1, address2: $address2, city: $city) {
          __typename
          id
          name
          address1
          address2
          city
          state
          zip
        }
      }`
    )
  ) as Observable<OnUpdateOrgSubscription>;

  OnDeleteOrgListener: Observable<OnDeleteOrgSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteOrg($id: String, $name: String, $address1: String, $address2: String, $city: String) {
        onDeleteOrg(id: $id, name: $name, address1: $address1, address2: $address2, city: $city) {
          __typename
          id
          name
          address1
          address2
          city
          state
          zip
        }
      }`
    )
  ) as Observable<OnDeleteOrgSubscription>;
}
