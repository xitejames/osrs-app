import React from 'react';
import { 
    View, 
    TouchableOpacity, 
 } from 'react-native';
 import {
	Container,
	Content,
	Header,
	Footer,
	Input,
	Col,
	Row
 } from 'native-base'
import cUser  from '../../Classes/CurrentUser';
import StatIcon from '../../Components/Stat_icon/StatIcon'
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../../Styles/style'
import { PageFooter } from '../../Components/Footer'
import { navigationOptions } from '../../Components/Headers/header'

    export default class SkillScreen extends React.Component {	
		static navigationOptions = navigationOptions
		
        constructor(props) {
            super(props);
            this.state = {
                stats: {},
                username: ''
            };
			this.stats = cUser.resetCurrent()
			cUser.setStats(cUser.resetCurrent())
        }
        onPress = () => {
            this.searchUser(this.state.username);
        };
    
        resetCurrent(){        
            this.setState({ stats: cUser.resetCurrent });
        };
    
        searchUser = async () => {
			const user = this.state.username
            {this.resetCurrent}
            let hsUrl = 'https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player=';
            return fetch(`${hsUrl}${user}`).then((response) => response.text()).then((body) => {
                //Removes blank spaces from pulled data
                let changed = (body = body.replace(/\n/g, ','));
                //places data into array
                let res = changed.split(',');
                //for statement to populate json
                for (var i = 0; i < 31; i++) {
                    if (i <= 23) {
                        let spliced = res.splice(0, 3);
                        this.stats.playerStats[i].Rank = spliced[0];
                        this.stats.playerStats[i].Level = spliced[1];
                        this.stats.playerStats[i].XP = spliced[2];
                    } else if (i <= 24) {
                        let spliced = res.splice(0, 4);
                        this.stats.playerStats[i].catch1 = spliced[0];
                        this.stats.playerStats[i].catch2 = spliced[1];
                        this.stats.playerStats[i].catch3 = spliced[2];
                        this.stats.playerStats[i].catch4 = spliced[3];
                    } else {
                        let spliced = res.splice(0, 2);
                        this.stats.playerStats[i].Rank = spliced[0];
                        this.stats.playerStats[i].Score = spliced[1];
                    }
                }
                this.stats.playerStats.splice(24, 1);
                this.setState({ stats: this.stats.playerStats });
                cUser.setStats(this.stats);  
            }).catch(function(err) {
                console.log(err)
            });
		};

		testfun(test){
					console.log(test)
		}

	render() {

		return(    
		<Container style={styles.container}>
			<Header
				transparent
				translucent={true}
				noShadow={true}
				iosBarStyle="light-content"
			  >
			  <View style={styles.header}>
			  </View>
			</Header>
		  <Content style={styles.content}>
		  	<Row >				
				<View style={styles.searchInputContainer}>
					<Input
						placeholder="Search for a user..."
						value={this.state.username}
						onChangeText={(username) => {
							this.setState({ username });
						}}
						returnKeyType="search"
						onSubmitEditing={() => this.searchUser()}
						placeholderTextColor="#FFFF00"
						style={styles.searchInput}
					/>
				</View>
			</Row>
			<Row>
				<Col>
					<TouchableOpacity style={styles.statItem}
					onPress={() => this.props.navigation.navigate(this.stats.playerStats[1].Name)}>
						<StatIcon							
							currentName={this.stats.playerStats[1].Name}
							currentRank={this.stats.playerStats[1].Rank}
							currentLevel={this.stats.playerStats[1].Level}
							currentXP={this.stats.playerStats[1].XP}
							currentImage={'../../../assets/Images/Skill_Icons/'+ this.stats.playerStats[1].Name +'.png'}
						/>
					</TouchableOpacity>
				</Col>
				<Col>
				<TouchableOpacity style={styles.statItem}
				onPress={() => this.props.navigation.navigate(this.stats.playerStats[4].Name)}>
					<StatIcon							
						currentName={this.stats.playerStats[4].Name}
						currentRank={this.stats.playerStats[4].Rank}
						currentLevel={this.stats.playerStats[4].Level}
						currentXP={this.stats.playerStats[4].XP}
						currentImage={'../../../assets/Images/Skill_Icons/'+ this.stats.playerStats[4].Name +'.png'}
					/>
				</TouchableOpacity>
				</Col>
				<Col>
				<TouchableOpacity style={styles.statItem}
				onPress={() => this.props.navigation.navigate(this.stats.playerStats[15].Name)}>
					<StatIcon							
						currentName={this.stats.playerStats[15].Name}
						currentRank={this.stats.playerStats[15].Rank}
						currentLevel={this.stats.playerStats[15].Level}
						currentXP={this.stats.playerStats[15].XP}
						currentImage={'../../../assets/Images/Skill_Icons/'+ this.stats.playerStats[15].Name +'.png'}
					/>
				</TouchableOpacity>
				</Col>
			</Row>
			<Row>
				<Col>
					<TouchableOpacity style={styles.statItem}
					onPress={() => this.props.navigation.navigate(this.stats.playerStats[3].Name)}>
						<StatIcon							
							currentName={this.stats.playerStats[3].Name}
							currentRank={this.stats.playerStats[3].Rank}
							currentLevel={this.stats.playerStats[3].Level}
							currentXP={this.stats.playerStats[3].XP}
							currentImage={'../../../assets/Images/Skill_Icons/'+ this.stats.playerStats[3].Name +'.png'}
						/>
					</TouchableOpacity>
				</Col>
				<Col>
				<TouchableOpacity style={styles.statItem}
				onPress={() => this.props.navigation.navigate(this.stats.playerStats[17].Name)}>
					<StatIcon							
						currentName={this.stats.playerStats[17].Name}
						currentRank={this.stats.playerStats[17].Rank}
						currentLevel={this.stats.playerStats[17].Level}
						currentXP={this.stats.playerStats[17].XP}
						currentImage={'../../../assets/Images/Skill_Icons/'+ this.stats.playerStats[17].Name +'.png'}
					/>
				</TouchableOpacity>
				</Col>
				<Col>
				<TouchableOpacity style={styles.statItem}
				onPress={() => this.props.navigation.navigate(this.stats.playerStats[14].Name)}>
					<StatIcon							
						currentName={this.stats.playerStats[14].Name}
						currentRank={this.stats.playerStats[14].Rank}
						currentLevel={this.stats.playerStats[14].Level}
						currentXP={this.stats.playerStats[14].XP}
						currentImage={'../../../assets/Images/Skill_Icons/'+ this.stats.playerStats[14].Name +'.png'}
					/>
				</TouchableOpacity>
				</Col>
			</Row>
			<Row>
				<Col>
					<TouchableOpacity style={styles.statItem}
					onPress={() => this.props.navigation.navigate(this.stats.playerStats[2].Name)}>
						<StatIcon							
							currentName={this.stats.playerStats[2].Name}
							currentRank={this.stats.playerStats[2].Rank}
							currentLevel={this.stats.playerStats[2].Level}
							currentXP={this.stats.playerStats[2].XP}
							currentImage={'../../../assets/Images/Skill_Icons/'+ this.stats.playerStats[2].Name +'.png'}
						/>
					</TouchableOpacity>
				</Col>
				<Col>
				<TouchableOpacity style={styles.statItem}
				onPress={() => this.props.navigation.navigate(this.stats.playerStats[16].Name)}>
					<StatIcon							
						currentName={this.stats.playerStats[16].Name}
						currentRank={this.stats.playerStats[16].Rank}
						currentLevel={this.stats.playerStats[16].Level}
						currentXP={this.stats.playerStats[16].XP}
						currentImage={'../../../assets/Images/Skill_Icons/'+ this.stats.playerStats[16].Name +'.png'}
					/>
				</TouchableOpacity>
				</Col>
				<Col>
				<TouchableOpacity style={styles.statItem}
				onPress={() => this.props.navigation.navigate(this.stats.playerStats[11].Name)}>
					<StatIcon							
						currentName={this.stats.playerStats[11].Name}
						currentRank={this.stats.playerStats[11].Rank}
						currentLevel={this.stats.playerStats[11].Level}
						currentXP={this.stats.playerStats[11].XP}
						currentImage={'../../../assets/Images/Skill_Icons/'+ this.stats.playerStats[11].Name +'.png'}
					/>
				</TouchableOpacity>
				</Col>
			</Row>
			<Row>
				<Col>
					<TouchableOpacity style={styles.statItem}
					onPress={() => this.props.navigation.navigate(this.stats.playerStats[5].Name)}>
						<StatIcon							
							currentName={this.stats.playerStats[5].Name}
							currentRank={this.stats.playerStats[5].Rank}
							currentLevel={this.stats.playerStats[5].Level}
							currentXP={this.stats.playerStats[5].XP}
							currentImage={'../../../assets/Images/Skill_Icons/'+ this.stats.playerStats[5].Name +'.png'}
						/>
					</TouchableOpacity>
				</Col>
				<Col>
				<TouchableOpacity style={styles.statItem}
				onPress={() => this.props.navigation.navigate(this.stats.playerStats[19].Name)}>
					<StatIcon							
						currentName={this.stats.playerStats[19].Name}
						currentRank={this.stats.playerStats[19].Rank}
						currentLevel={this.stats.playerStats[19].Level}
						currentXP={this.stats.playerStats[19].XP}
						currentImage={'../../../assets/Images/Skill_Icons/'+ this.stats.playerStats[19].Name +'.png'}
					/>
				</TouchableOpacity>
				</Col>
				<Col>
				<TouchableOpacity style={styles.statItem}
				onPress={() => this.props.navigation.navigate(this.stats.playerStats[8].Name)}>
					<StatIcon							
						currentName={this.stats.playerStats[8].Name}
						currentRank={this.stats.playerStats[8].Rank}
						currentLevel={this.stats.playerStats[8].Level}
						currentXP={this.stats.playerStats[8].XP}
						currentImage={'../../../assets/Images/Skill_Icons/'+ this.stats.playerStats[8].Name +'.png'}
					/>
				</TouchableOpacity>
				</Col>
			</Row>
			<Row>
				<Col>
					<TouchableOpacity style={styles.statItem}
					onPress={() => this.props.navigation.navigate(this.stats.playerStats[6].Name)}>
						<StatIcon							
							currentName={this.stats.playerStats[6].Name}
							currentRank={this.stats.playerStats[6].Rank}
							currentLevel={this.stats.playerStats[6].Level}
							currentXP={this.stats.playerStats[6].XP}
							currentImage={'../../../assets/Images/Skill_Icons/'+ this.stats.playerStats[6].Name +'.png'}
						/>
					</TouchableOpacity>
				</Col>
				<Col>
				<TouchableOpacity style={styles.statItem}
				onPress={() => this.props.navigation.navigate(this.stats.playerStats[13].Name)}>
					<StatIcon							
						currentName={this.stats.playerStats[13].Name}
						currentRank={this.stats.playerStats[13].Rank}
						currentLevel={this.stats.playerStats[13].Level}
						currentXP={this.stats.playerStats[13].XP}
						currentImage={'../../../assets/Images/Skill_Icons/'+ this.stats.playerStats[13].Name +'.png'}
					/>
				</TouchableOpacity>
				</Col>
				<Col>
				<TouchableOpacity style={styles.statItem}
				onPress={() => this.props.navigation.navigate(this.stats.playerStats[12].Name)}>
					<StatIcon							
						currentName={this.stats.playerStats[12].Name}
						currentRank={this.stats.playerStats[12].Rank}
						currentLevel={this.stats.playerStats[12].Level}
						currentXP={this.stats.playerStats[12].XP}
						currentImage={'../../../assets/Images/Skill_Icons/'+ this.stats.playerStats[12].Name +'.png'}
					/>
				</TouchableOpacity>
				</Col>
			</Row>
			<Row>
				<Col>
					<TouchableOpacity style={styles.statItem}
					onPress={() => this.props.navigation.navigate(this.stats.playerStats[7].Name)}>
						<StatIcon							
							currentName={this.stats.playerStats[7].Name}
							currentRank={this.stats.playerStats[7].Rank}
							currentLevel={this.stats.playerStats[7].Level}
							currentXP={this.stats.playerStats[7].XP}
							currentImage={'../../../assets/Images/Skill_Icons/'+ this.stats.playerStats[7].Name +'.png'}
						/>
					</TouchableOpacity>
				</Col>
				<Col>
				<TouchableOpacity style={styles.statItem}
				onPress={() => this.props.navigation.navigate(this.stats.playerStats[10].Name)}>
					<StatIcon							
						currentName={this.stats.playerStats[10].Name}
						currentRank={this.stats.playerStats[10].Rank}
						currentLevel={this.stats.playerStats[10].Level}
						currentXP={this.stats.playerStats[10].XP}
						currentImage={'../../../assets/Images/Skill_Icons/'+ this.stats.playerStats[10].Name +'.png'}
					/>
				</TouchableOpacity>
				</Col>
				<Col>
				<TouchableOpacity style={styles.statItem}
				onPress={() => this.props.navigation.navigate(this.stats.playerStats[9].Name)}>
					<StatIcon							
						currentName={this.stats.playerStats[9].Name}
						currentRank={this.stats.playerStats[9].Rank}
						currentLevel={this.stats.playerStats[9].Level}
						currentXP={this.stats.playerStats[9].XP}
						currentImage={'../../../assets/Images/Skill_Icons/'+ this.stats.playerStats[9].Name +'.png'}
					/>
				</TouchableOpacity>
				</Col>
			</Row>
			<Row>
				<Col>
					<TouchableOpacity style={styles.statItem}
					onPress={() => this.props.navigation.navigate(this.stats.playerStats[21].Name)}>
						<StatIcon							
							currentName={this.stats.playerStats[21].Name}
							currentRank={this.stats.playerStats[21].Rank}
							currentLevel={this.stats.playerStats[21].Level}
							currentXP={this.stats.playerStats[21].XP}
							currentImage={'../../../assets/Images/Skill_Icons/'+ this.stats.playerStats[21].Name +'.png'}
						/>
					</TouchableOpacity>
				</Col>
				<Col>
				<TouchableOpacity style={styles.statItem}
				onPress={() => this.props.navigation.navigate(this.stats.playerStats[19].Name)}>
					<StatIcon							
						currentName={this.stats.playerStats[19].Name}
						currentRank={this.stats.playerStats[19].Rank}
						currentLevel={this.stats.playerStats[19].Level}
						currentXP={this.stats.playerStats[19].XP}
						currentImage={'../../../assets/Images/Skill_Icons/'+ this.stats.playerStats[19].Name +'.png'}
					/>
				</TouchableOpacity>
				</Col>
				<Col>
				<TouchableOpacity style={styles.statItem}
				onPress={() => this.props.navigation.navigate(this.stats.playerStats[20].Name)}>
					<StatIcon							
						currentName={this.stats.playerStats[20].Name}
						currentRank={this.stats.playerStats[20].Rank}
						currentLevel={this.stats.playerStats[20].Level}
						currentXP={this.stats.playerStats[20].XP}
						currentImage={'../../../assets/Images/Skill_Icons/'+ this.stats.playerStats[20].Name +'.png'}
					/>
				</TouchableOpacity>
				</Col>
			</Row>
			<Row style={{ paddingBottom: 20 }}>
				<Col>
					<TouchableOpacity style={styles.statItem}
					onPress={() => this.props.navigation.navigate(this.stats.playerStats[22].Name)}>
						<StatIcon							
							currentName={this.stats.playerStats[22].Name}
							currentRank={this.stats.playerStats[22].Rank}
							currentLevel={this.stats.playerStats[22].Level}
							currentXP={this.stats.playerStats[22].XP}
							currentImage={'../../../assets/Images/Skill_Icons/'+ this.stats.playerStats[22].Name +'.png'}
						/>
					</TouchableOpacity>
				</Col>
				<Col>
				<TouchableOpacity style={styles.statItem}
				onPress={() => this.props.navigation.navigate(this.stats.playerStats[23].Name)}>
					<StatIcon							
						currentName={this.stats.playerStats[23].Name}
						currentRank={this.stats.playerStats[23].Rank}
						currentLevel={this.stats.playerStats[23].Level}
						currentXP={this.stats.playerStats[23].XP}
						currentImage={'../../../assets/Images/Skill_Icons/'+ this.stats.playerStats[23].Name +'.png'}
					/>
				</TouchableOpacity>
				</Col>
				<Col>
				<TouchableOpacity style={styles.statItem}
				onPress={() => this.props.navigation.navigate(this.stats.playerStats[0].Name)}>
					<StatIcon							
						currentName={this.stats.playerStats[0].Name}
						currentRank={this.stats.playerStats[0].Rank}
						currentLevel={this.stats.playerStats[0].Level}
						currentXP={this.stats.playerStats[0].XP}
						currentImage={'../../../assets/Images/Skill_Icons/'+ this.stats.playerStats[0].Name +'.png'}
					/>
				</TouchableOpacity>
				</Col>
			</Row>
			</Content>
			<Footer>
				<PageFooter nav={this.props.navigation}/>  
			</Footer>
		  </Container>

		)


	}
}

