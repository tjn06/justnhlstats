<ScreenTemplate>
<View style={styles.screen}>
  <Text style={styles.titleText}>{conferenceTitle}</Text>
   <FlatList
      data={selectedTeams}
      keyExtractor={(item) => item.id}
      numColumns={1}
      /* keyExtractor={(_, index) => index.toString()} */
      renderItem={({ item, index }) => {
        return (
          <RenderTeam teamItem={item} index={index} />
        );
      }}
    />
</View>
</ScreenTemplate>
