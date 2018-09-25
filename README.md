# Project Name

> Project description

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Endpoints](#Endpoints)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Endpoints

The following endpoints are used for CRUD operations

- Create
    `/homes/:homeId`
    Used for a post request adding a new review to specific home

- Read
    `/homes/:homeId/reviews/:id`
    Used for to get reviews for a specific page `:id`

    `/reviews/queried/:query`
    Used for to get reviews matching a specific search `:query`

    `/reviews/queried/:query/:id`
    Used for to get reviews matching a specific search `:query`, for a specified page `:id`

- Update
    `/homes/:homeId/reviews/:reviewId`
    Used for a put request changing the review text for a specific review

- Delete
    `/homes/:homeId/reviews/:reviewId`
    Used for a delete request removing a specific review
## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

