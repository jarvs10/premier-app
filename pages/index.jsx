import Layout from "@/components/Layout";
import ListTeams from "@/components/ListTeams";
import axios from "axios"

export default function Home({ premier }) {

  return (
    <Layout
      title='Premier'
      description='Premier app and Stadiums'
    >
      <div className="mt-8">
        {
          premier.map(team => {
            return (
              <ListTeams 
                key={team.idTeam}
                team={team}
              />
            )
          })
        }
      </div>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const { data } = await axios.get('https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=English%20Premier%20League');

  return {
    props: {
      premier: data.teams
    }
  }
}