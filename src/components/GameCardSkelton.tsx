import { CardBody, Skeleton, SkeletonText, Card } from "@chakra-ui/react";

function GameCardSkelton() {
  return (
    <>
      <Card>
        <Skeleton height={"200px"}></Skeleton>
        <CardBody>
          <SkeletonText></SkeletonText>
        </CardBody>
      </Card>
    </>
  );
}

export default GameCardSkelton;
