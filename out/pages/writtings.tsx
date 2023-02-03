import Link from "next/link"

export default function Writtings() {
  return (
    <>
        <h1 >
          Writtings
        </h1>

        <ul className='list'>
          <li>
            <Link href="/writting:1">
            <h3>Tezos{"'"} Tumbler</h3>
            <p>Building a decentralized app enhancing privacy on the Ethereum network thanks to zk-SNARK</p>
            <time dateTime='2022-12-27'>27th december, 2022</time>
            </Link>
          </li>
          <li>
            <Link  href="/writting:2">
            <h3>Tezos{"'"} Tumbler</h3>
            <p>Building a decentralized app enhancing privacy on the Ethereum network thanks to zk-SNARK</p>
            <time dateTime='2022-12-27'>27th december, 2022</time>
            </Link>
          </li>
          <li>
            <Link  href="/writting:2">
            <h3>Tezos{"'"} Tumbler</h3>
            <p>Building a decentralized app enhancing privacy on the Ethereum network thanks to zk-SNARK</p>
            <time dateTime='2022-12-27'>27th december, 2022</time>
            </Link>
          </li>
          <li>
          <Link  href="/writtings">
            <h3>See more</h3>
            <span>→</span>
            </Link>
            </li>
        </ul>
    </>
  )
}