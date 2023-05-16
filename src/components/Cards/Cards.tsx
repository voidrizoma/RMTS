import { dataApi } from "../../interfaces/types"
import Link from "next/link"
import { Card, CardBody, CardTitle } from "./Cards.styled"

function CardComponent({ name, id, image}: dataApi): JSX.Element {

  return (
    <>
      <Card key={id}>
        <Link href="/character/[id]" as={`/character/${id}`}>
          <CardTitle> {name} </CardTitle>
          <CardBody>
            <img src={image} alt={`${name} Thumbnail`} />
          </CardBody>
        </Link>
      </Card>
    </>
  )
}

export default CardComponent;
