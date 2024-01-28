<h1>Task</h1>

<script>
    export let data; 
      $: Tasks = data.a.data.Tasks //task.data.Tasks
      $: console.log (data);
      $: console.log (Tasks);
</script>

 <h2>Tasks</h2>
    {#if Tasks && Tasks.length > 0 }
    <table>
        {#each Tasks as Task}
        <tr>
            <td>{Task.projectname}</td>
            <td>{Task.projectdescription}</td>
        </tr>
        {/each}
    </table>
    {/if} 