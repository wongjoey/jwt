import React from "react"
import { Form, Input, Segment, Divider } from "semantic-ui-react"

const link1 = "https://www.googleapis.com/oauth2/v3/certs"
const link2 = "https://accounts.google.com"

export default function JWKSInput({ jwks, updateJWKS, loading }) {
  return (
    <Segment padded>
      <h3 className="ui header">Enter jwks endpoint or issuer domain</h3>
      <Form style={{ opacity: 0.8 }}>
        <Input
          fluid
          loading={loading}
          icon="key"
          value={jwks}
          onChange={(e, data) => updateJWKS(data.value)}
          placeholder="Enter JWKS"
        />
      </Form>
      <Divider />
      <p>
        For example:{" "}
        <a href="#demo" onClick={e => e.preventDefault() || updateJWKS(link1)}>
          {link1}
        </a>{" "}
        or{" "}
        <a href="#demo" onClick={e => e.preventDefault() || updateJWKS(link2)}>
          {link2}
        </a>
      </p>
    </Segment>
  )
}
