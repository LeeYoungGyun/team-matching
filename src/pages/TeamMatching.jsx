import React, { useEffect, useState } from "react";
import Navigation from "../component/Navigation";

function TeamMatching() {
  const [time, setTime] = useState("Loading...");
  const [inputName, setInputName] = useState("");
  const [guestInput, setGuestInput] = useState("");
  const [waitingList, setWaitingList] = useState([]);
  const [teamResult, setTeamResult] = useState([]);
  const [matchHistory, setMatchHistory] = useState([]);

  const [members] = useState(
    ["강민우", "김보배", "김수빈", "문성준", "박성재", "박영상", "박용식", "박유준", "박인성", "박준영", "박초원", "손정호", "서지은", "안민영", "양승우", "이영균", "이진수",
     "이현수", "이현우", "조수아", "조재현", "최지우", "최영은", "최태선", "황채민"]
  );
  const [guests, setGuests] = useState(["게스트1", "게스트2", "게스트3"]);

  useEffect(() => {
    const Timer = setInterval(() => {
      const now = new Date();
      setTime(
        now.getHours().toString().padStart(2, "0") +
          ":" +
          now.getMinutes().toString().padStart(2, "0")
      );
    }, 1000);
    return () => clearInterval(Timer);
  }, []);

  const handleSelectName = (name) => {
    setInputName(name);
  };

  const handleAdd = () => {
    const trimmed = inputName.trim();
    if (!trimmed || waitingList.includes(trimmed)) return;
    setWaitingList((prev) => [...prev, trimmed]);
    setInputName("");
  };

  const handleRemove = (name) => {
    console.log('name===', name);
    setWaitingList((prev) => prev.filter((n) => n !== name));
  };

  const handleAddGuest = () => {
    const trimmed = guestInput.trim();
    if (!trimmed || guests.includes(trimmed)) return;
    setGuests((prev) => [...prev, trimmed]);
    setGuestInput("");
  };

  const makeTeam = () => {
    if (waitingList.length < 4) return;

    const shuffled = [...waitingList].sort(() => Math.random() - 0.5);
    const numPlayers = shuffled.length;
    const numTeams =
      numPlayers >= 12 ? 6 : numPlayers >= 8 ? 4 : 2;

    const teams = [];
    const usedPlayers = [];

    for (let i = 0; i < numTeams; i++) {
      const player1 = shuffled[i * 2];
      const player2 = shuffled[i * 2 + 1];
      if (player1 && player2) {
        teams.push([player1, player2]);
        usedPlayers.push(player1, player2);
      }
    }

    const remainingPlayers = shuffled.filter((p) => !usedPlayers.includes(p));

    const teamLabels = ["A", "B", "C", "D", "E", "F"];
    const finalTeams = teams.map((team, idx) => ({
      label: `팀 ${teamLabels[idx]}`,
      members: team
    }));

    setTeamResult(finalTeams);
    setMatchHistory((prev) => [...prev, finalTeams]);
    setWaitingList(remainingPlayers);
  };

  return (
    <>
      <Navigation />
      <div className="flex justify-center mt-10">
        <div className="w-full bg-black text-white rounded-3xl p-6 box-border max-w-xl">
          <div className="h-16 px-2 flex items-center text-lg text-slate-300">
            현재 시간: {time}
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm mb-4">
            <div>
              <p className="text-slate-400 mb-1">모임원</p>
              <div className="flex flex-wrap gap-2">
                {members.map((name) => (
                  <button
                    key={name}
                    onClick={() => handleSelectName(name)}
                    className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded"
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-slate-400 mb-1">게스트</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {guests.map((name) => (
                  <button
                    key={name}
                    onClick={() => handleSelectName(name)}
                    className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded"
                  >
                    {name}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  className="flex-1 px-3 py-1 rounded text-black text-sm"
                  placeholder="게스트 이름 입력"
                  value={guestInput}
                  onChange={(e) => setGuestInput(e.target.value)}
                />
                <button
                  onClick={handleAddGuest}
                  className="bg-green-700 hover:bg-green-800 text-white px-3 py-1 rounded text-sm"
                >
                  추가
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-5">
            <input
              type="text"
              className="flex-1 px-3 py-2 rounded text-black"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
              placeholder="이름 입력 또는 선택"
            />
            <button
              onClick={handleAdd}
              className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded"
            >
              추가
            </button>
          </div>

          <div className="mb-5">
            <p className="text-slate-400 mb-1">대기 중인 인원</p>
            <div className="flex flex-wrap gap-2">
              {waitingList.map((name, index) => (
                <div key={index} className="flex items-center bg-gray-700 px-3 py-1 rounded">
                  {name}
                  <button
                    onClick={() => handleRemove(name)}
                    className="ml-2 text-red-400 hover:text-red-600"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mb-5">
            <button
              onClick={makeTeam}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2 rounded"
              disabled={waitingList.length < 4}
            >
              무작위 팀 구성하기
            </button>
          </div>

          {teamResult.length > 0 && (
            <div className="bg-gray-900 p-4 rounded space-y-3">
              {teamResult.map((team) => (
                <div key={team.label} className="flex items-center justify-between">
                  <span>
                    🏸 {team.label}: {team.members.join(" & ")}
                  </span>
                </div>
              ))}
            </div>
          )}

          {matchHistory.length > 0 && (
            <div className="mt-6 bg-gray-800 p-4 rounded">
              <h3 className="text-md font-semibold mb-2">📜 이전 매칭 히스토리</h3>
              {matchHistory.map((match, idx) => (
                <div key={idx} className="mb-2">
                  <p className="text-slate-400 text-sm">라운드 {idx + 1}</p>
                  {match.map((team) => (
                    <p key={team.label} className="text-sm">
                      {team.label}: {team.members.join(" & ")}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default TeamMatching;
