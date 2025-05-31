// 문자열을 type으로 가지는 타입 형태
type Direction = "left" | "right" | "up" | "down";
let move: Direction;

move = "right";
//move = 'top' err

// 유효한 값만 제한하는 경우

type Status = "success" | "error" | "loading";

function showStatus(status: Status) {
  return status;
}
